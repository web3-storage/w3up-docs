---
id: "web3_storage_capabilities.Utils"
title: "Namespace: Utils"
sidebar_label: "Utils"
custom_edit_url: null
---

[@web3-storage/capabilities](../modules/web3_storage_capabilities.md).Utils

## Functions

### canDelegateAbility

▸ **canDelegateAbility**(`parent`, `child`): `boolean`

TODO: needs to account for caps derived from diferent namespaces like 'account/info' can be derived from 'store/add'

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Ability` |
| `child` | `Ability` |

#### Returns

`boolean`

#### Defined in

[packages/capabilities/src/utils.js:108](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/utils.js#L108)

___

### canDelegateURI

▸ **canDelegateURI**(`child?`, `parent?`): ``true`` \| `Failure`

Check URI can be delegated

#### Parameters

| Name | Type |
| :------ | :------ |
| `child?` | `string` |
| `parent?` | `string` |

#### Returns

``true`` \| `Failure`

#### Defined in

[packages/capabilities/src/utils.js:11](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/utils.js#L11)

___

### equal

▸ **equal**(`child`, `parent`, `constraint`): ``true`` \| `Failure`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `unknown` |
| `parent` | `unknown` |
| `constraint` | `string` |

#### Returns

``true`` \| `Failure`

#### Defined in

[packages/capabilities/src/utils.js:48](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/utils.js#L48)

___

### equalLink

▸ **equalLink**<`T`\>(`claimed`, `delegated`): `Result`<``true``, `Failure`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `claimed` | `T` |
| `delegated` | `T` |

#### Returns

`Result`<``true``, `Failure`\>

#### Defined in

[packages/capabilities/src/utils.js:66](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/utils.js#L66)

___

### equalWith

▸ **equalWith**(`child`, `parent`): ``true`` \| `Failure`

Checks that `with` on claimed capability is the same as `with`
in delegated capability. Note this will ignore `can` field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object` |
| `parent` | `Object` |

#### Returns

``true`` \| `Failure`

#### Defined in

[packages/capabilities/src/utils.js:33](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/utils.js#L33)

___

### fail

▸ **fail**(`value`): `undefined` \| `Failure`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``true`` \| `Failure` |

#### Returns

`undefined` \| `Failure`

#### Defined in

[packages/capabilities/src/utils.js:88](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/utils.js#L88)
