---
id: "web3_storage_upload_client.CAR"
title: "Namespace: CAR"
sidebar_label: "CAR"
custom_edit_url: null
---

[@web3-storage/upload-client](../modules/web3_storage_upload_client.md).CAR

## Classes

- [BlockStream](../classes/web3_storage_upload_client.CAR.BlockStream.md)

## Type Aliases

### Block

Ƭ **Block**<\>: `Block`

#### Defined in

[packages/upload-client/src/car.js:4](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/car.js#L4)

## Functions

### encode

▸ **encode**(`blocks`, `root?`): `Promise`<`CARFile`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `Iterable`<`Block`<`any`, `number`, `number`, `Version`\>\> \| `AsyncIterable`<`Block`<`any`, `number`, `number`, `Version`\>\> |
| `root?` | `AnyLink` |

#### Returns

`Promise`<`CARFile`\>

#### Defined in

[packages/upload-client/src/car.js:12](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/car.js#L12)
