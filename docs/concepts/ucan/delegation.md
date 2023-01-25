---
title: UCAN delegation
---

### User owned accounts by default

In our [Intro to UCAN article](./index.md), we gave a high-level overview of the new authorization protocol at the heart of our next-generation storage APIs. One of the most exciting things about UCAN is the ability for users to delegate access to their account's resources to other users, services, and devices. This guide will highlight some of the ways that delegation can be used with w3up, our new upload API. But first, let's consider some use cases that don't require delegation. 

When applications use the w3ui components, or developers run the `w3` CLI, they need access to a "space," which is a unique ID that groups uploads together. Once a space has been registered with the w3up service, it can be used to upload files and other data. 

If you're uploading files from your laptop using [the `w3` command line tool](../../getting-started/w3cli.md), you can just create a space on the laptop and register it with the w3up service using the `w3 space register` command. The service will issue you a UCAN token that grants your client's "agent" some capabilities; in this case, you get the ability to upload data to web3.storage, list your uploads, unlink uploads from your account, etc. 

Each client that you use to access w3up will have an "agent" associated with it. Agents are what we call the component that manages your local private keys and signs UCAN requests to the w3up service. When you create a space and register it, the agent you use to register the space is automatically issued a UCAN delegation that grants the agent the ability to upload to the space, as well as other "space related" capabilities like listing uploads.

Because your laptop has access to the private key for your agent, and your agent has access to the space, there's no need to delegate anything. The `w3` tool will just sign a UCAN request token with your agent's private key and will include all the required proofs that you have the right permissions.

Another example is a fully decentralized app with a web frontend that interacts with a smart contract "backend." Let's say you're building a decentralized image sharing application, where users can get rewarded for sharing funny memes. You'd like your app's users to be able to upload images to web3.storage, but you don't want to coordinate their access or handle billing on their behalf.

In that case, you can use the [w3ui keyring component](https://beta.ui.web3.storage/keyring) to help your users create their own spaces and register them with w3up. There's no need for delegation in this case, because each user has their own registered account with web.storage.

### App owned accounts - transparent to the user

Now let's see where web3.storage delegation can improve the experience for end users of traditional apps. By delegating to a user's session the capability to upload to your app's w3up spaces, you can add uploads to an app without impacting your infrastructure, completely invisibly to users.

Let's say that you run a recipe sharing app written on traditional web2 technologies. You have a sizeable user-base, and you want to add recipe photo uploads without impacting your existing infrastructure. With UCAN delegation, users can upload directly to your web3.storage space, with no visible impact on the user experience.

To do this, you can delegate access to your own web3.storage space, instead of having each user create their own space.

On the client side, each user will still create an agent with a public/private keypair, but instead of using the agent to register with web3.storage, they can send the agent's public ID to your app's web API or cloud function. That service will issue a UCAN that grants some permissions to the user's agent, without needing to coordinate anything between your app's backend and the web3.storage service. In that way, storage access is attached to your application's session.

When a new user signs into your web app, the frontend can use [`w3up-client`](../../getting-started/w3up-client.md), which will automatically create an agent keypair on first run. Instead of using the client to create and register spaces belonging to the user, the frontend can send the agent's public ID to your backend service instead.

Your backend service can then use an instance of `w3up-client` that's been configured to use your service's agent. Since this agent has access to your w3up spaces, it can create UCAN delegations for the user's agent. The client's [`createDelegation` method][reference-client#createdelegation] will create a delegation object that you can send to the user.

Here's what your backend code might look like:

```javascript
import { create } from '@web3-storage/w3up-client'
import { parse as parseDID } from '@ipld/dag-ucan/did'

async function delegationRequestHandler(request) {
  const userDID = await getDIDFromRequest(request)
  
  // The `create` function will load your agent keys from disk,
  // falling back to creating a new agent if none can be found.
  // Here, we assume that you've previously created an agent
  // and that the agent is configured to use the space that
  // you want to issue delegations to.
  // see the docs at https://github.com/web3-storage/w3up-client
  // for more about using the client.
  const client = await create()

  // createDelegation takes in the DID of the "audience" that
  // we're issuing the delegation to, as well as a list of
  // "ability" strings.
  // Here, we're passing in the abilities needed to upload to the space:
  // 'space/info', 'store/add', and 'upload/add'.
  // 
  // With these capabilities, the user will be able to upload to the space,
  // but they won't be able to list existing uploads or perform any "management"
  // operation on the space. To give full access, use the special "top" ability
  // "*", which includes all abilities that your agent has access to.
  // 
  // See the capabilities spec for more about capabilities: 
  // https://github.com/web3-storage/w3protocol/blob/main/spec/capabilities.md  
  const delegation = await client.createDelegation(userDID, ['store/add', 'upload/add'])

  // The delegation object is a binary "blob" that encodes the UCAN
  // delegation into the CAR format. 
  // Here we're just returning it from our handler and assuming that the 
  // server-side framework will handle the details of setting the right 
  // Content-Type headers, etc.
  // Alternatively, you could encode the delegation to base64 and 
  // include it in a JSON response, etc.
  return delegation
}

async function getDIDFromRequest(request) {
  // How to extract the user's public DID from the request will
  // depend on the server-side framework you're using and your
  // service API.
  //
  // Here we'll assume that the `request` object has a `json()`
  // method that does what you'd expect, and that the request
  // body has a "did" field containing the DID as a string.
  //
  // The client's createDelegation method expects a `Principal`
  // object whose `did()` method returns the DID string.
  // We can use the `parse` function from `@ipld/dag-ucan/did`
  // to convert the string to a valid `Principal`.
  const body = await request.json()
  const did = parseDID(body.did)
  return did
}
```

When the frontend recieves the delegation from your service, they can call [`addProof`][reference-client#addproof] on their `w3up-client` instance and pass in the bytes of the delegation object. They will also need to call `client.setCurrentSpace(spaceDID)`, passing in the DID for the space that you delegated access to. Once that's done, they should be able to use the `uploadFile` and `uploadDirectory` client methods to send data to your web3.storage space.

Note that in our example above, we granted a limited set of capabilities, so that our user can upload but not access any other functionality related to the space. If you want to delegate all permissions, use the `'*'` ability in your delegation, and use the client's [`addSpace` method][reference-client#addspace] instead of `addProof`.

### Delegate across apps and services

You can also use delegation to share access with other services, without requiring an explicit agreement between each service provider.

For example, you or your users could delegate access to an image resizing app that will create thumbnails of each uploaded image and write them back to web3.storage. While you could do this without delegation by having the image app use its own web3.storage account, the uploads would be attached to the space registered to the app. By using delegation, you'll be able to see the CIDs for the thumbnails in the upload listing for the user's account instead, and the resizing app doesn't need to have any kind of business relationship with web3.storage to use the service.

### Link devices through delegation

The last use case we'll look at today involves managing multiple devices belonging to the same user.

Earlier, we used the example of uploading files from your laptop as a case where delegation isn't needed, since the private key for your registered UCAN identity lives on the laptop.

If you also want to upload from your phone, you can use delegation to share access to your account without needing to go through the registration process on the new device. Instead, your laptop can generate a delegation for your phone's UCAN identity and send it to the phone. Because the w3up service doesn't need to be "in the loop," you can even add new devices to your account when you're offline, for example, by having your phone scan a QR code from the laptop's screen.

## Step-by-step delegation with w3cli

Now that we've seen some reasons why you might want to delegate, let's look at delegation in practice using the `w3` command line tool.

If you haven't had a chance to check out the `w3` tool yet, see our [intro to using w3up from the command line](../../getting-started/w3cli.md) to get an overview. 

To get started, make sure you have [Node.js](https://nodejs.org/en/) version 16 or greater installed on your computer. Then enter the following command at a terminal:

```shell
npm install -g @web3-storage/w3cli
```

This will install the `w3` command, which we'll be using to interact with the w3up service.

By default, `w3` manages a single "agent" keypair, stored in a configuration directory in your home folder. To demonstrate delegation, we'll create a second agent, and use the default agent to issue a delegation for the second agent to use.

To create the second agent, open a new terminal and enter the following to set the `W3_STORE_NAME` environment variable:

```bash
export W3_STORE_NAME=second-agent
```

Now enter `w3 whoami`, which prints the DID of your agent. If you enter `w3 whoami` in both terminal windows, you should see a different DID. The first window will show the DID of your default agent, and the second window with the `W3_STORE_NAME` variable set will show the ID of your second agent.

Let's go through the process step-by-step.

##### 1. Create a space using your default agent

In the first terminal window, use the `w3 space create` command to create a new space:

```bash
w3 space create SharedSpace
```

Here we're giving the space the name `SharedSpace`, but you can call yours whatever you like.

Running `w3 space ls` should show the new space.

##### 2. Register your space

Before we can make requests to the w3up service, we need to register our new space using  the `w3 space register` command.

In the first terminal window, run the following command, filling in your own email address:

```
w3 space register your-email@your-provider.net
```

You should see a message in the console asking you to check your email. Once you click the link in your inbox, you'll see a success message. Now you're ready to start using the rest of the `w3` commands.

##### 3. Upload something to your account

Let's upload a test file to confirm that things are working.

First, make a text file called `hello.txt` with some simple content:

```shell
echo "Hello, web3!" > hello.txt
```

Now you can use `w3 up hello.txt` to upload the file. You should see something like this:

```
  1 file (12B)
  bagbaieraspawtgooy5lptr7loyd3fxjsrgkamre3y6au3ga4df5bkhrxdkmq
⁂ Stored 1 file
⁂ https://w3s.link/ipfs/bafybeidwm2gfdrx2yjnzdqnw7n3a2er2vo5uwv6w5otjfbyboeoq3jfiby

```

Running `w3up list` should now show the CID of your upload:

```
bafybeidwm2gfdrx2yjnzdqnw7n3a2er2vo5uwv6w5otjfbyboeoq3jfiby
```

You can also use the HTTP gateway at `w3s.link` to quickly fetch the content and check that it resolves. With the CID above, the gateway URL would be `https://w3s.link/ipfs/bafybeidwm2gfdrx2yjnzdqnw7n3a2er2vo5uwv6w5otjfbyboeoq3jfiby`.

##### 4. Get the DID of the agent you want to delegate to

Switch over to your second terminal window with the `W3_STORE_NAME` variable set and run the `w3 whoami` command. You should see a string starting with `did:key:`. Copy that string to your clipboard for the next step.

##### 5. Delegate access to the new Agent DID

Run the `w3 delegation create` command, passing in the DID for the second agent. The `-o` flag tells the `w3` command to write the delegation to a file named `delegation.car`:

```shell
w3 delegation create -o delegation.car SECOND_AGENT_DID
```

Be sure to replace `SECOND_AGENT_DID` in the example command with the DID for the second agent that you copied in step 4.

This will create a file called `delegation.car` in your current directory. 

##### 6. Add the delegated space to the second agent

Next, import this delegation to our second agent.

In the second terminal window, with the `W3_STORE_NAME` variable set, use the `w3 space add` command, passing in `delegation.car`:

```shell
w3 space add ./delegation.car
```

If you now run `w3 space ls` in the second terminal, you should see the space you just imported in the list.

Imported spaces are not automatically set as the default space, so we need one more command before we're ready to go. Copy the space DID from the `w3 space ls` command you just ran and run this to set the imported space as the default for uploads:

```bash
w3 space use SPACE_DID
```

Replace `SPACE_DID` with the space DID you just copied. If you run `w3 space ls` again, you should see a `*` symbol next to the space, indicating that it's currently active.

##### 7. Upload to the space from the second agent

Now that your second agent has access to the space created by the first, you can use `w3 up` in your second terminal window to upload whatever you like.

Note that the `w3 delegation create` command we used in step 5 delegates the `'*'` or "top" capability by default, so the second agent will have full access to the space. You can restrict the set of delegated capabilites using the `--can` flag. Try running `w3 delegation create --help` to see more options.

## Wrapping up

UCAN delegation is a powerful tool for managing access to your w3up resources. Hopefully this post has given you some ideas about how delegation can help you build out new experiences using w3up.

Thanks for following along, and feel free to [get in touch](https://web3.storage/docs/community/help-and-support/) if you have any questions!

[reference-client#createdelegation]: ../../api/w3up-client/classes/client.Client.md#createdelegation
[reference-client#addproof]: ../../api/w3up-client/classes/client.Client.md#addproof
[reference-client#addspace]: ../../api/w3up-client/classes/client.Client.md#addspace