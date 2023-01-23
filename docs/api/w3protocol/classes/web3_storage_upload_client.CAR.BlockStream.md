---
id: "web3_storage_upload_client.CAR.BlockStream"
title: "Class: BlockStream"
sidebar_label: "BlockStream"
custom_edit_url: null
---

[@web3-storage/upload-client](../modules/web3_storage_upload_client.md).[CAR](../namespaces/web3_storage_upload_client.CAR.md).BlockStream

## Hierarchy

- `ReadableStream`

  ↳ **`BlockStream`**

## Constructors

### constructor

• **new BlockStream**(`car`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `car` | `BlobLike` |

#### Overrides

ReadableStream.constructor

#### Defined in

[packages/upload-client/src/car.js:40](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/car.js#L40)

## Properties

### getRoots

• **getRoots**: () => `Promise`<`AnyLink`[]\>

#### Type declaration

▸ (): `Promise`<`AnyLink`[]\>

##### Returns

`Promise`<`AnyLink`[]\>

#### Defined in

[packages/upload-client/src/car.js:68](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/car.js#L68)
