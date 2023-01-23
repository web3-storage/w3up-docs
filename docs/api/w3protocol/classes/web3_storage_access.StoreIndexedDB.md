---
id: "web3_storage_access.StoreIndexedDB"
title: "Class: StoreIndexedDB"
sidebar_label: "StoreIndexedDB"
custom_edit_url: null
---

[@web3-storage/access](../modules/web3_storage_access.md).StoreIndexedDB

Store implementation for the browser.

Usage:

```js
import { StoreIndexedDB } from '@web3-storage/access/stores/store-indexeddb'
```

## Hierarchy

- `IndexedDBDriver`

  ↳ **`StoreIndexedDB`**

## Constructors

### constructor

• **new StoreIndexedDB**(`dbName`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |
| `options?` | `Object` |
| `options.autoOpen` | `undefined` \| `boolean` |
| `options.dbStoreName` | `undefined` \| `string` |
| `options.dbVersion` | `undefined` \| `number` |

#### Inherited from

IndexedDBDriver.constructor

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:46](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L46)

## Properties

### #autoOpen

• `Private` **#autoOpen**: `boolean`

#### Inherited from

IndexedDBDriver.#autoOpen

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:37](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L37)

___

### #db

• `Private` **#db**: `undefined` \| `IDBDatabase`

#### Inherited from

IndexedDBDriver.#db

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:34](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L34)

___

### #dbName

• `Private` **#dbName**: `string`

#### Inherited from

IndexedDBDriver.#dbName

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:25](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L25)

___

### #dbStoreName

• `Private` **#dbStoreName**: `string`

#### Inherited from

IndexedDBDriver.#dbStoreName

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:31](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L31)

___

### #dbVersion

• `Private` **#dbVersion**: `undefined` \| `number`

#### Inherited from

IndexedDBDriver.#dbVersion

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:28](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L28)

## Methods

### #getOpenDB

▸ `Private` **#getOpenDB**(): `Promise`<`IDBDatabase`\>

#### Returns

`Promise`<`IDBDatabase`\>

#### Inherited from

IndexedDBDriver.#getOpenDB

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:54](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L54)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

IndexedDBDriver.close

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:86](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L86)

___

### load

▸ **load**(): `Promise`<`undefined` \| `AgentDataExport`\>

#### Returns

`Promise`<`undefined` \| `AgentDataExport`\>

#### Inherited from

IndexedDBDriver.load

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:118](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L118)

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

IndexedDBDriver.open

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:63](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L63)

___

### reset

▸ **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

IndexedDBDriver.reset

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:142](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L142)

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

IndexedDBDriver.save

#### Defined in

[packages/access-client/src/drivers/indexeddb.js:95](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/drivers/indexeddb.js#L95)
