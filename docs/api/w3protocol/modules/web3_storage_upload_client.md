---
id: "web3_storage_upload_client"
title: "Module: @web3-storage/upload-client"
sidebar_label: "@web3-storage/upload-client"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [CAR](../namespaces/web3_storage_upload_client.CAR.md)
- [Store](../namespaces/web3_storage_upload_client.Store.md)
- [UnixFS](../namespaces/web3_storage_upload_client.UnixFS.md)
- [Upload](../namespaces/web3_storage_upload_client.Upload.md)

## Classes

- [ShardStoringStream](../classes/web3_storage_upload_client.ShardStoringStream.md)
- [ShardingStream](../classes/web3_storage_upload_client.ShardingStream.md)

## Functions

### uploadCAR

▸ **uploadCAR**(`conf`, `car`, `options?`): `Promise`<`AnyLink`\>

Uploads a CAR file to the service.

The difference between this function and `Store.add` is that the CAR file is
automatically sharded and an "upload" is registered, linking the individual
shards (see `Upload.add`).

Use the `onShardStored` callback to obtain the CIDs of the CAR file shards.

Required delegated capability proofs: `store/add`, `upload/add`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `store/add` and `upload/add` delegated capability. |
| `car` | `BlobLike` | CAR file. |
| `options?` | `UploadOptions` |  |

#### Returns

`Promise`<`AnyLink`\>

#### Defined in

[packages/upload-client/src/index.js:98](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/index.js#L98)

___

### uploadDirectory

▸ **uploadDirectory**(`conf`, `files`, `options?`): `Promise`<`AnyLink`\>

Uploads a directory of files to the service and returns the root data CID
for the generated DAG. All files are added to a container directory, with
paths in file names preserved.

Required delegated capability proofs: `store/add`, `upload/add`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `store/add` and `upload/add` delegated capability. |
| `files` | `FileLike`[] | File data. |
| `options?` | `UploadOptions` |  |

#### Returns

`Promise`<`AnyLink`\>

#### Defined in

[packages/upload-client/src/index.js:63](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/index.js#L63)

___

### uploadFile

▸ **uploadFile**(`conf`, `file`, `options?`): `Promise`<`AnyLink`\>

Uploads a file to the service and returns the root data CID for the
generated DAG.

Required delegated capability proofs: `store/add`, `upload/add`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `store/add` and `upload/add` delegated capability. |
| `file` | `BlobLike` | File data. |
| `options?` | `UploadOptions` |  |

#### Returns

`Promise`<`AnyLink`\>

#### Defined in

[packages/upload-client/src/index.js:32](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/index.js#L32)
