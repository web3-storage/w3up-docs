---
id: "web3_storage_upload_client.UnixFS"
title: "Namespace: UnixFS"
sidebar_label: "UnixFS"
custom_edit_url: null
---

[@web3-storage/upload-client](../modules/web3_storage_upload_client.md).UnixFS

## Functions

### createDirectoryEncoderStream

▸ **createDirectoryEncoderStream**(`files`): `ReadableStream`<`Block`<`any`, `number`, `number`, `Version`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `Iterable`<`FileLike`\> |

#### Returns

`ReadableStream`<`Block`<`any`, `number`, `number`, `Version`\>\>

#### Defined in

[packages/upload-client/src/unixfs.js:91](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/unixfs.js#L91)

___

### createFileEncoderStream

▸ **createFileEncoderStream**(`blob`): `ReadableStream`<`Block`<`any`, `number`, `number`, `Version`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `BlobLike` |

#### Returns

`ReadableStream`<`Block`<`any`, `number`, `number`, `Version`\>\>

#### Defined in

[packages/upload-client/src/unixfs.js:27](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/unixfs.js#L27)

___

### encodeDirectory

▸ **encodeDirectory**(`files`): `Promise`<`UnixFSEncodeResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `Iterable`<`FileLike`\> |

#### Returns

`Promise`<`UnixFSEncodeResult`\>

#### Defined in

[packages/upload-client/src/unixfs.js:80](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/unixfs.js#L80)

___

### encodeFile

▸ **encodeFile**(`blob`): `Promise`<`UnixFSEncodeResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `BlobLike` |

#### Returns

`Promise`<`UnixFSEncodeResult`\>

#### Defined in

[packages/upload-client/src/unixfs.js:16](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/unixfs.js#L16)
