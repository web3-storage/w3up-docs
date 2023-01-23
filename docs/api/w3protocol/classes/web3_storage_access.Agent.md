---
id: "web3_storage_access.Agent"
title: "Class: Agent"
sidebar_label: "Agent"
custom_edit_url: null
---

[@web3-storage/access](../modules/web3_storage_access.md).Agent

Agent

Usage:

```js
import { Agent } from '@web3-storage/access/agent'
```

## Constructors

### constructor

• **new Agent**(`data`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`AgentData`](web3_storage_access.AgentData.md) | Agent data |
| `options?` | `AgentOptions` |  |

#### Defined in

[packages/access-client/src/agent.js:81](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L81)

## Properties

### #data

• `Private` **#data**: [`AgentData`](web3_storage_access.AgentData.md)

#### Defined in

[packages/access-client/src/agent.js:75](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L75)

___

### connection

• **connection**: `ConnectionView`<`Service`\>

#### Defined in

[packages/access-client/src/agent.js:83](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L83)

___

### url

• **url**: `URL`

#### Defined in

[packages/access-client/src/agent.js:82](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L82)

## Accessors

### issuer

• `get` **issuer**(): `Signer`<\`did:${string}:${string}\`, `SigAlg`\>

#### Returns

`Signer`<\`did:${string}:${string}\`, `SigAlg`\>

#### Defined in

[packages/access-client/src/agent.js:114](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L114)

___

### meta

• `get` **meta**(): `AgentMeta`

#### Returns

`AgentMeta`

#### Defined in

[packages/access-client/src/agent.js:118](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L118)

___

### spaces

• `get` **spaces**(): `Map`<\`did:${string}:${string}\`, `SpaceMeta`\>

#### Returns

`Map`<\`did:${string}:${string}\`, `SpaceMeta`\>

#### Defined in

[packages/access-client/src/agent.js:122](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L122)

## Methods

### #delegations

▸ `Private` **#delegations**(`caps?`): { `delegation`: `Delegation`<`Capabilities`\> ; `meta`: `DelegationMeta`  }[]

Query the delegations store for all the delegations matching the capabilities provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `caps?` | `Capability`<`Ability`, \`${string}:${string}\`, `any`\>[] |

#### Returns

{ `delegation`: `Delegation`<`Capabilities`\> ; `meta`: `DelegationMeta`  }[]

#### Defined in

[packages/access-client/src/agent.js:151](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L151)

___

### #waitForDelegation

▸ `Private` **#waitForDelegation**(`opts?`): `Promise`<`Delegation`<`Capabilities`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Object` |
| `opts.signal` | `undefined` \| `AbortSignal` |

#### Returns

`Promise`<`Delegation`<`Capabilities`\>\>

#### Defined in

[packages/access-client/src/agent.js:487](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L487)

___

### addProof

▸ **addProof**(`delegation`): `Promise`<`void`\>

Add a proof to the agent store

A proof is a delegation with an audience matching agent DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegation` | `Delegation`<`Capabilities`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent.js:137](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L137)

___

### createSpace

▸ **createSpace**(`name?`): `Promise`<{ `did`: \`did:key:${string}\` ; `meta`: `SpaceMeta` ; `proof`: `Delegation`<[`ToDeriveClaim`<{}\>]\>  }\>

Creates a space signer and a delegation to the agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Promise`<{ `did`: \`did:key:${string}\` ; `meta`: `SpaceMeta` ; `proof`: `Delegation`<[`ToDeriveClaim`<{}\>]\>  }\>

#### Defined in

[packages/access-client/src/agent.js:244](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L244)

___

### currentSpace

▸ **currentSpace**(): `undefined` \| \`did:${string}:${string}\`

Get current space DID

#### Returns

`undefined` \| \`did:${string}:${string}\`

#### Defined in

[packages/access-client/src/agent.js:372](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L372)

___

### currentSpaceWithMeta

▸ **currentSpaceWithMeta**(): `undefined` \| { `capabilities`: `any`[] ; `did`: \`did:${string}:${string}\` ; `meta`: `undefined` \| `SpaceMeta` ; `proofs`: `Delegation`<`Capabilities`\>[]  }

Get current space DID, proofs and abilities

#### Returns

`undefined` \| { `capabilities`: `any`[] ; `did`: \`did:${string}:${string}\` ; `meta`: `undefined` \| `SpaceMeta` ; `proofs`: `Delegation`<`Capabilities`\>[]  }

#### Defined in

[packages/access-client/src/agent.js:379](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L379)

___

### delegate

▸ **delegate**(`options`): `Promise`<`Delegation`<`Capabilities`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DelegationOptions` |

#### Returns

`Promise`<`Delegation`<`Capabilities`\>\>

#### Defined in

[packages/access-client/src/agent.js:521](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L521)

___

### delegations

▸ **delegations**(`caps?`): `Delegation`<`Capabilities`\>[]

Get delegations created by the agent for others.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caps?` | `Capability`<`Ability`, \`${string}:${string}\`, `any`\>[] | Capabilities to filter by. Empty or undefined caps with return all the delegations. |

#### Returns

`Delegation`<`Capabilities`\>[]

#### Defined in

[packages/access-client/src/agent.js:212](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L212)

___

### delegationsWithMeta

▸ **delegationsWithMeta**(`caps?`): { `delegation`: `Delegation`<`Capabilities`\> ; `meta`: `DelegationMeta`  }[]

Get delegations created by the agent for others and their metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caps?` | `Capability`<`Ability`, \`${string}:${string}\`, `any`\>[] | Capabilities to filter by. Empty or undefined caps with return all the delegations. |

#### Returns

{ `delegation`: `Delegation`<`Capabilities`\> ; `meta`: `DelegationMeta`  }[]

#### Defined in

[packages/access-client/src/agent.js:227](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L227)

___

### did

▸ **did**(): \`did:${string}:${string}\`

#### Returns

\`did:${string}:${string}\`

#### Defined in

[packages/access-client/src/agent.js:126](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L126)

___

### execute

▸ **execute**<`C`, `I`\>(`...invocations`): `Await`<`InferServiceInvocations`<`I`, `Service`\>\>

Execute invocations on the agent's connection

**`Example`**

```js
const i1 = await agent.invoke(Space.info, {})
const i2 = await agent.invoke(Space.recover, {
  nb: {
    identity: 'mailto:hello@web3.storage',
  },
})

const results = await agent.execute2(i1, i2)

```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Capability`<`Ability`, \`${string}:${string}\`, `any`, `C`\> |
| `I` | extends [`ServiceInvocation`<`C`, `Service`\>, ...ServiceInvocation<C, Service\>[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...invocations` | `I` |

#### Returns

`Await`<`InferServiceInvocations`<`I`, `Service`\>\>

#### Defined in

[packages/access-client/src/agent.js:610](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L610)

___

### getSpaceInfo

▸ **getSpaceInfo**(`space?`): `Promise`<`Selectable`<`SpaceTable`\> & {}\>

Get Space information from Access service

#### Parameters

| Name | Type |
| :------ | :------ |
| `space?` | `URI`<``"did:"``\> |

#### Returns

`Promise`<`Selectable`<`SpaceTable`\> & {}\>

#### Defined in

[packages/access-client/src/agent.js:687](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L687)

___

### importSpaceFromDelegation

▸ **importSpaceFromDelegation**(`delegation`): `Promise`<{ `did`: \`did:${string}:${string}\` ; `meta`: `SpaceMeta` ; `proof`: `Delegation`<[{}]\> = del }\>

Import a space from a '*' delegation

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegation` | `Delegation`<`Capabilities`\> |

#### Returns

`Promise`<{ `did`: \`did:${string}:${string}\` ; `meta`: `SpaceMeta` ; `proof`: `Delegation`<[{}]\> = del }\>

#### Defined in

[packages/access-client/src/agent.js:277](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L277)

___

### invoke

▸ **invoke**<`A`, `R`, `CAP`, `C`\>(`cap`, `options`): `Promise`<`IssuedInvocationView`<`InferInvokedCapability`<`CAP`\>\>\>

Creates an invocation for the given capability with Agent's proofs, service, issuer and space.

**`Example`**

```js
const recoverInvocation = await agent.invoke(Space.recover, {
  nb: {
    identity: 'mailto: email@gmail.com',
  },
})

await recoverInvocation.execute(agent.connection)
// or
await agent.execute(recoverInvocation)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Ability` |
| `R` | extends \`${string}:${string}\` & `Phantom`<{}, `R`\> |
| `CAP` | extends `TheCapabilityParser`<`CapabilityMatch`<`A`, `R`, `C`\>, `CAP`\> |
| `C` | extends `Caveats` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `CAP` |
| `options` | `InvokeOptions`<`A`, `R`, `CAP`\> |

#### Returns

`Promise`<`IssuedInvocationView`<`InferInvokedCapability`<`CAP`\>\>\>

#### Defined in

[packages/access-client/src/agent.js:637](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L637)

___

### invokeAndExecute

▸ **invokeAndExecute**<`A`, `R`, `CAP`, `C`\>(`cap`, `options`): `Promise`<`InferServiceInvocationReturn`<`InferInvokedCapability`<`CAP`\>, `Service`\>\>

Invoke and execute the given capability on the Access service connection

```js

await agent.invokeAndExecute(Space.recover, {
  nb: {
    identity: 'mailto: email@gmail.com',
  },
})

// sugar for
const recoverInvocation = await agent.invoke(Space.recover, {
  nb: {
    identity: 'mailto: email@gmail.com',
  },
})

await recoverInvocation.execute(agent.connection)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Ability` |
| `R` | extends \`${string}:${string}\` & `Phantom`<{}, `R`\> |
| `CAP` | extends `TheCapabilityParser`<`CapabilityMatch`<`A`, `R`, `C`\>, `CAP`\> |
| `C` | extends `Caveats` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `CAP` |
| `options` | `InvokeOptions`<`A`, `R`, `CAP`\> |

#### Returns

`Promise`<`InferServiceInvocationReturn`<`InferInvokedCapability`<`CAP`\>, `Service`\>\>

#### Defined in

[packages/access-client/src/agent.js:580](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L580)

___

### peer

▸ **peer**(`channel`): `Peer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `Channel` |

#### Returns

`Peer`

#### Defined in

[packages/access-client/src/agent.js:678](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L678)

___

### proofs

▸ **proofs**(`caps?`): `Delegation`<`Capabilities`\>[]

Get all the proofs matching the capabilities

Proofs are delegations with an audience matching agent DID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caps?` | `Capability`<`Ability`, \`${string}:${string}\`, `any`\>[] | Capabilities to filter by. Empty or undefined caps with return all the proofs. |

#### Returns

`Delegation`<`Capabilities`\>[]

#### Defined in

[packages/access-client/src/agent.js:195](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L195)

___

### recover

▸ **recover**(`email`, `opts?`): `Promise`<`Delegation`<[{}]\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `opts?` | `Object` |
| `opts.signal` | `undefined` \| `AbortSignal` |

#### Returns

`Promise`<`Delegation`<[{}]\>[]\>

#### Defined in

[packages/access-client/src/agent.js:310](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L310)

___

### registerSpace

▸ **registerSpace**(`email`, `opts?`): `Promise`<`void`\>

Invokes voucher/redeem for the free tier, wait on the websocket for the voucher/claim and invokes it

It also adds a full space delegation to the service in the voucher/claim invocation to allow for recovery

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `opts?` | `Object` |
| `opts.signal` | `undefined` \| `AbortSignal` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent.js:416](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L416)

___

### removeExpiredDelegations

▸ **removeExpiredDelegations**(): `Promise`<`void`\>

Clean up any expired delegations.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent.js:180](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L180)

___

### setCurrentSpace

▸ **setCurrentSpace**(`space`): `Promise`<\`did:${string}:${string}\`\>

Sets the current selected space

Other methods will default to use the current space if no resource is defined

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | \`did:${string}:${string}\` |

#### Returns

`Promise`<\`did:${string}:${string}\`\>

#### Defined in

[packages/access-client/src/agent.js:352](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L352)

___

### create

▸ `Static` **create**(`init?`, `options?`): `Promise`<[`Agent`](web3_storage_access.Agent.md)\>

Create a new Agent instance, optionally with the passed initialization data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<`AgentDataModel`\> |
| `options?` | `AgentOptions` & `AgentDataOptions` |

#### Returns

`Promise`<[`Agent`](web3_storage_access.Agent.md)\>

#### Defined in

[packages/access-client/src/agent.js:98](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L98)

___

### from

▸ `Static` **from**(`raw`, `options?`): [`Agent`](web3_storage_access.Agent.md)

Instantiate an Agent from pre-exported agent data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `AgentDataExport` |
| `options?` | `AgentOptions` & `AgentDataOptions` |

#### Returns

[`Agent`](web3_storage_access.Agent.md)

#### Defined in

[packages/access-client/src/agent.js:109](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L109)
