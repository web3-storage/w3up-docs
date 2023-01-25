
# UCAN: User controlled authorization networks

The w3up platform by web3.storage is built on a technology called UCAN, a system which takes a different approach to user identity and authorization than you may be used to from building or interacting with "web 2.0" services. Read on to learn about what makes UCAN special.

## UCAN basics

UCAN stands for User Controlled Authorization Networks, and it's fundamentally about changing the relationship between users and service providers in a way that empowers the end-user.

Broadly speaking, there are two big pieces of the "auth" puzzle: authentication and authorization. Authentication tries to answer the question "are you who you claim to be," while authorization tries to answer "are you allowed to do what you're trying to do." UCAN addresses both pieces of the puzzle in a novel way.

Most online services today use a "service controlled" notion of user identity and authorization. When you sign up for a service, you'll be assigned an opaque identifier for your user account, and the service will have some kind of permission model that determines what you're allowed to do. Both the identifier and the set of permissions are entirely controlled by the service, making it difficult to share resources between multiple platforms.

UCAN flips things around, so that the user creates their own "user id" and shares it with the service.  Because the user ids are based on public key cryptography, the service can validate that the user must have the private key that corresponds to their user id, which removes the need for password-based authentication.

Using cryptographic keys for user identity helps solve the authentication problem, but there's still the matter of authorization, or what you're allowed to do. The most common form of authorization is the Access Control List, or ACL, where the service keeps track of which user ids are allowed to access which resources. Some flavors of the ACL pattern will use things like "roles" to group permissions into buckets, but they all essentially translate a user id to a set of permissions, or "things you can do."

In the ACL model, the service you're trying to access will look up your user id in some kind of database to determine what you're allowed to do, usually "just in time" as part of the request. While this model works well for centralized services, it starts to fall apart in systems that don't have a single "source of truth" that can maintain the ACL. When multiple systems need to interact, careful coordination is needed to ensure that the permissions are consistent, and the overhead of verifying permissions starts to add up for complex requests that may involve several services.

To crib an analogy from the [UCAN spec](https://github.com/ucan-wg/spec#12-intuition), ACLs are like a bouncer at a fancy club. After you authenticate (by showing your ID), the bouncer will look up your name on the guest list and either let you in or turn you away. If there are many venues that want to share the same guest list, they will need to coordinate ahead of time, and the coordination overhead grows as more venues are added.

UCANs work more like a movie ticket or a festival pass, which grants you access based on simple possession of the ticket. There's no need to first verify your identity and compare it to an access list. Instead, the ticket itself contains everything needed to determine whether you should be allowed in, and you can give your ticket to a friend without needing to coordinate with the venue.

## Resources and Capabilities

As we mentioned above, UCANs contain enough information for a service to make authorization decisions without needing a separate access control list or centralized "authorization service" that maps user ids to permissions.

This works by embedding the permissions into a "bearer token" that can be attached to a request to prove that you're allowed to do what you're trying to do. You may be familiar with bearer tokens from systems like [OAuth](https://oauth.net), where they're used as a secondary form of authentication and issued once you log in with your primary password.

UCAN extends the [JSON Web Token (JWT)](https://jwt.io) standard to include a permission model based on **capabilities** and **resources**. Simply put, a capability represents something you're allowed to do, and a resource represents something you're allowed to do it to.

You can "invoke" a capability by making a request to a service and including a UCAN that contains the capability name and a URI that identifies the resource you're acting upon. The service will then inspect the UCAN and determine if the capabilities you're presenting are sufficient to fulfil the request.

## Proofs

When you make a request with a UCAN token, you generate the token on the client side and encode the capabilities and resources that you should have access to in the token. But how does the service know that you're actually supposed to have those capabilities? This is where proofs come into the picture.

Each UCAN token contains a "proof chain" that shows how your capabilities were issued and by whom. A proof chain is actually just a collection of UCAN tokens that show the "provenance" of your claimed capabilities.

The simplest proof chain just has a single entry, a UCAN issued by the service or "owner" of the resource that you're trying to access. When you make a request, you embed this proof token into your "request token," and the service will compare the capabilities you're claiming in your request token to the ones granted by the proof token. Because the proof token is signed with the resource owner's private key, the service can easily validate that the proof is correct and hasn't been tampered with to grant unauthorized capabilities.

## Delegation

Above, we described a "proof chain" with a single proof - a UCAN issued by the service which grants some capabilities to a user. This is simple to reason about, but does not illustrate the power of proof chains. After all, one link is not much of a chain!

To understand more complex proof chains, we first need to talk about **delegation**.

In the movie ticket analogy, we mentioned that you can give your ticket to a friend without needing to coordinate with the venue owner. UCANs allow something similar through delegation. Delegation allows you to share your access to a resource with another user (or service, or device), without actually needing to give them a copy of your private key.

As a user of a UCAN-based system, you can freely delegate some or all of your capabilities to another "agent" by issuing your own UCAN tokens. The term "agent" here roughly corresponds to "user," but it could also be another service, or a second device like a phone belonging to the same human user. In either case, delegation allows you to "share authority without sharing keys," using proof chains to show that the authority was ultimately derived from the resource owner.

Delegated UCANs have a proof chain with multiple "links" in the form of UCAN tokens. At the root of the chain is the token issued by the resource owner, with additional tokens granting some or all of those capabilities to other agents. By allowing users to control which agents can exercise their capabilities, UCANs offer tremendous flexibility in how users can interact with a service.

Delegation is at the heart of what makes UCAN special! To learn more about delegation in the context of the w3up APIs, see our [delegation overview](./delegation.md).

## Diving deeper

Hopefully this post has helped you understand UCAN at a high level. Don't worry if there are things you still don't understand! UCAN represents a fundamentally different model for authorization that what we've grown accustomed to in a "web 2" world, but we believe that the power and flexibility it offers is worth the learning curve.

If you really want to dive into UCANs, the [UCAN spec](https://github.com/ucan-wg/spec) goes into detail about how everything works. You can also take a look at [ucanto](https://github.com/web3-storage/ucanto), our UCAN-based framework for building UCAN services and interacting with them over the wire. You won't need to use `ucanto` directly in order to use w3up, but it's a good resource if you're curious about how things work under the hood.


