---
id: "web3_storage_upload_client.Store"
title: "Namespace: Store"
sidebar_label: "Store"
custom_edit_url: null
---

[@web3-storage/upload-client](../modules/web3_storage_upload_client.md).Store

## Functions

### add

▸ **add**(`conf`, `car`, `options?`): `Promise`<`CARLink`\>

Store a DAG encoded as a CAR file. The issuer needs the `store/add`
delegated capability.

Required delegated capability proofs: `store/add`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `store/add` delegated capability. |
| `car` | `Blob` | CAR file data. |
| `options?` | `RequestOptions` |  |

#### Returns

`Promise`<`CARLink`\>

#### Defined in

[packages/upload-client/src/store.js:30](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/store.js#L30)

___

### list

▸ **list**(`conf`, `options?`): `Promise`<`ListResponse`<`StoreListResult`\>\>

List CAR files stored by the issuer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `store/list` delegated capability. |
| `options?` | `ListRequestOptions` |  |

#### Returns

`Promise`<`ListResponse`<`StoreListResult`\>\>

#### Defined in

[packages/upload-client/src/store.js:122](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/store.js#L122)

___

### remove

▸ **remove**(`conf`, `link`, `options?`): `Promise`<`void`\>

Remove a stored CAR file by CAR CID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `store/remove` delegated capability. |
| `link` | `CARLink` | CID of CAR file to remove. |
| `options?` | `RequestOptions` |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/upload-client/src/store.js:169](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/store.js#L169)
