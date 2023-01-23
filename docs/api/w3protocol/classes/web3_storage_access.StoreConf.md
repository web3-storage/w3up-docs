---
id: "web3_storage_access.StoreConf"
title: "Class: StoreConf"
sidebar_label: "StoreConf"
custom_edit_url: null
---

[@web3-storage/access](../modules/web3_storage_access.md).StoreConf

Store implementation with "[conf](https://github.com/sindresorhus/conf)"

Usage:

```js
import { StoreConf } from '@web3-storage/access/stores/store-conf'
```

## Hierarchy

- `ConfDriver`

  ↳ **`StoreConf`**

## Constructors

### constructor

• **new StoreConf**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.profile` | `string` |

#### Inherited from

ConfDriver.constructor

#### Defined in

[packages/access-client/src/drivers/conf.js:30](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L30)

## Properties

### #config

• `Private` **#config**: `Conf`<`AgentDataExport`\>

#### Inherited from

ConfDriver.#config

#### Defined in

[packages/access-client/src/drivers/conf.js:25](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L25)

___

### path

• **path**: `string`

#### Inherited from

ConfDriver.path

#### Defined in

[packages/access-client/src/drivers/conf.js:38](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L38)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

ConfDriver.close

#### Defined in

[packages/access-client/src/drivers/conf.js:43](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L43)

___

### load

▸ **load**(): `Promise`<`undefined` \| `AgentDataExport`\>

#### Returns

`Promise`<`undefined` \| `AgentDataExport`\>

#### Inherited from

ConfDriver.load

#### Defined in

[packages/access-client/src/drivers/conf.js:63](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L63)

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

ConfDriver.open

#### Defined in

[packages/access-client/src/drivers/conf.js:41](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L41)

___

### reset

▸ **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

ConfDriver.reset

#### Defined in

[packages/access-client/src/drivers/conf.js:45](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L45)

___

### save

▸ **save**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `AgentDataExport` |

#### Returns

`Promise`<`void`\>

#### Inherited from

ConfDriver.save

#### Defined in

[packages/access-client/src/drivers/conf.js:50](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/conf.js#L50)
