---
id: "web3_storage_upload_client.Upload"
title: "Namespace: Upload"
sidebar_label: "Upload"
custom_edit_url: null
---

[@web3-storage/upload-client](../modules/web3_storage_upload_client.md).Upload

## Functions

### add

▸ **add**(`conf`, `root`, `shards`, `options?`): `Promise`<`UploadAddResponse`\>

Register an "upload" with the service. The issuer needs the `upload/add`
delegated capability.

Required delegated capability proofs: `upload/add`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `upload/add` delegated capability. |
| `root` | `UnknownLink` | Root data CID for the DAG that was stored. |
| `shards` | `CARLink`[] | CIDs of CAR files that contain the DAG. |
| `options?` | `RequestOptions` |  |

#### Returns

`Promise`<`UploadAddResponse`\>

#### Defined in

[packages/upload-client/src/upload.js:30](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/upload.js#L30)

___

### list

▸ **list**(`conf`, `options?`): `Promise`<`ListResponse`<`UploadListResult`\>\>

List uploads created by the issuer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `upload/list` delegated capability. |
| `options?` | `ListRequestOptions` |  |

#### Returns

`Promise`<`ListResponse`<`UploadListResult`\>\>

#### Defined in

[packages/upload-client/src/upload.js:84](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/upload.js#L84)

___

### remove

▸ **remove**(`conf`, `root`, `options?`): `Promise`<`undefined` \| `UploadRemoveResponse` & {}\>

Remove an upload by root data CID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `upload/remove` delegated capability. |
| `root` | `UnknownLink` | Root data CID to remove. |
| `options?` | `RequestOptions` |  |

#### Returns

`Promise`<`undefined` \| `UploadRemoveResponse` & {}\>

#### Defined in

[packages/upload-client/src/upload.js:132](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/upload.js#L132)
