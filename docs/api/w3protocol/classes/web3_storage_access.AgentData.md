---
id: "web3_storage_access.AgentData"
title: "Class: AgentData"
sidebar_label: "AgentData"
custom_edit_url: null
---

[@web3-storage/access](../modules/web3_storage_access.md).AgentData

**`Implements`**

## Constructors

### constructor

• **new AgentData**(`data`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `AgentDataModel` |
| `options?` | `AgentDataOptions` |

#### Defined in

[packages/access-client/src/agent-data.js:17](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L17)

## Properties

### #save

• `Private` **#save**: (`data`: `AgentDataExport`) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`data`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `AgentDataExport` |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent-data.js:11](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L11)

___

### currentSpace

• **currentSpace**: `undefined` \| \`did:${string}:${string}\`

#### Defined in

[packages/access-client/src/agent-data.js:22](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L22)

[packages/access-client/src/agent-data.js:123](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L123)

___

### delegations

• **delegations**: `Map`<`string`, { `delegation`: `Delegation`<`Capabilities`\> ; `meta`: `DelegationMeta`  }\>

#### Defined in

[packages/access-client/src/agent-data.js:21](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L21)

___

### meta

• **meta**: `AgentMeta`

#### Defined in

[packages/access-client/src/agent-data.js:18](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L18)

___

### principal

• **principal**: `Signer`<\`did:${string}:${string}\`, `SigAlg`\>

#### Defined in

[packages/access-client/src/agent-data.js:19](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L19)

___

### spaces

• **spaces**: `Map`<\`did:${string}:${string}\`, `SpaceMeta`\>

#### Defined in

[packages/access-client/src/agent-data.js:20](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L20)

## Methods

### addDelegation

▸ **addDelegation**(`delegation`, `meta?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegation` | `Delegation`<`Capabilities`\> |
| `meta?` | `DelegationMeta` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent-data.js:131](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L131)

___

### addSpace

▸ **addSpace**(`did`, `meta`, `proof?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | \`did:${string}:${string}\` |
| `meta` | `SpaceMeta` |
| `proof?` | `Delegation`<`Capabilities`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent-data.js:114](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L114)

___

### export

▸ **export**(): `AgentDataExport`

Export data in a format safe to pass to `structuredClone()`.

#### Returns

`AgentDataExport`

#### Defined in

[packages/access-client/src/agent-data.js:88](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L88)

___

### removeDelegation

▸ **removeDelegation**(`cid`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | `Link`<`Capabilities`, `MulticodecCode`<`number`, `string`\>, `SigAlg`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent-data.js:142](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L142)

___

### setCurrentSpace

▸ **setCurrentSpace**(`did`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | \`did:${string}:${string}\` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/access-client/src/agent-data.js:122](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L122)

___

### create

▸ `Static` **create**(`init?`, `options?`): `Promise`<[`AgentData`](web3_storage_access.AgentData.md)\>

Create a new AgentData instance from the passed initialization data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<`AgentDataModel`\> |
| `options?` | `AgentDataOptions` |

#### Returns

`Promise`<[`AgentData`](web3_storage_access.AgentData.md)\>

#### Defined in

[packages/access-client/src/agent-data.js:33](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L33)

___

### fromExport

▸ `Static` **fromExport**(`raw`, `options?`): [`AgentData`](web3_storage_access.AgentData.md)

Instantiate AgentData from previously exported data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `AgentDataExport` |
| `options?` | `AgentDataOptions` |

#### Returns

[`AgentData`](web3_storage_access.AgentData.md)

#### Defined in

[packages/access-client/src/agent-data.js:56](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent-data.js#L56)
