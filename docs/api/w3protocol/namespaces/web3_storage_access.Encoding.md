---
id: "web3_storage_access.Encoding"
title: "Namespace: Encoding"
sidebar_label: "Encoding"
custom_edit_url: null
---

[@web3-storage/access](../modules/web3_storage_access.md).Encoding

Encoding utilities

It is recommended that you import directly with:
```js
import * as Encoding from '@web3-storage/access/encoding'

// or

import { encodeDelegations } from '@web3-storage/access/encoding'
```

## Functions

### bytesToDelegations

▸ **bytesToDelegations**<`T`\>(`bytes`): `Delegation`<`T`\>[]

Decode bytes into Delegations

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Capability`<`Ability`, \`${string}:${string}\`, `unknown`\>, ...Capability<Ability, \`${string}:${string}\`, unknown\>[]] = `Capabilities` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `BytesDelegation`<`T`\> |

#### Returns

`Delegation`<`T`\>[]

#### Defined in

[packages/access-client/src/encoding.js:71](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/encoding.js#L71)

___

### delegationToString

▸ **delegationToString**(`delegation`, `encoding?`): `string`

Encode one Types.Delegation Delegation into a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegation` | `Delegation`<`Capabilities`\> |
| `encoding?` | `SupportedEncodings` |

#### Returns

`string`

#### Defined in

[packages/access-client/src/encoding.js:117](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/encoding.js#L117)

___

### delegationsToBytes

▸ **delegationsToBytes**(`delegations`): `Uint8Array`

Encode delegations as bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegations` | `Delegation`<`Capabilities`\>[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/access-client/src/encoding.js:28](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/encoding.js#L28)

___

### delegationsToString

▸ **delegationsToString**(`delegations`, `encoding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `delegations` | `Delegation`<`Capabilities`\>[] | `undefined` |
| `encoding` | `SupportedEncodings` | `'base64url'` |

#### Returns

`string`

#### Defined in

[packages/access-client/src/encoding.js:105](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/encoding.js#L105)

___

### expirationToDate

▸ **expirationToDate**(`expiration?`): `undefined` \| `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiration?` | `number` |

#### Returns

`undefined` \| `Date`

#### Defined in

[packages/access-client/src/encoding.js:150](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/encoding.js#L150)

___

### stringToDelegation

▸ **stringToDelegation**<`T`\>(`raw`, `encoding?`): `Delegation`<`T`\>

Decode string into a Types.Delegation Delegation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Capability`<`Ability`, \`${string}:${string}\`, `unknown`\>, ...Capability<Ability, \`${string}:${string}\`, unknown\>[]] = `Capabilities` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `EncodedDelegation`<`T`\> |
| `encoding?` | `SupportedEncodings` |

#### Returns

`Delegation`<`T`\>

#### Defined in

[packages/access-client/src/encoding.js:141](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/encoding.js#L141)

___

### stringToDelegations

▸ **stringToDelegations**<`T`\>(`raw`, `encoding?`): `Delegation`<`Capabilities`\>[]

Decode string into Types.Delegation Delegation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Capability`<`Ability`, \`${string}:${string}\`, `unknown`\>, ...Capability<Ability, \`${string}:${string}\`, unknown\>[]] = `Capabilities` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `raw` | `EncodedDelegation`<`T`\> | `undefined` |
| `encoding?` | `SupportedEncodings` | `'base64url'` |

#### Returns

`Delegation`<`Capabilities`\>[]

#### Defined in

[packages/access-client/src/encoding.js:128](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/encoding.js#L128)
