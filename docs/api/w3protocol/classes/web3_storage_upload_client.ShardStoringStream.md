---
id: "web3_storage_upload_client.ShardStoringStream"
title: "Class: ShardStoringStream"
sidebar_label: "ShardStoringStream"
custom_edit_url: null
---

[@web3-storage/upload-client](../modules/web3_storage_upload_client.md).ShardStoringStream

Upload multiple DAG shards (encoded as CAR files) to the service.

Note: an "upload" must be registered in order to link multiple shards
together as a complete upload.

The writeable side of this transform stream accepts CAR files and the
readable side yields `CARMetadata`.

## Hierarchy

- `TransformStream`

  ↳ **`ShardStoringStream`**

## Constructors

### constructor

• **new ShardStoringStream**(`conf`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `InvocationConfig` | Configuration for the UCAN invocation. An object with `issuer`, `with` and `proofs`. The `issuer` is the signing authority that is issuing the UCAN invocation(s). It is typically the user _agent_. The `with` is the resource the invocation applies to. It is typically the DID of a space. The `proofs` are a set of capability delegations that prove the issuer has the capability to perform the action. The issuer needs the `store/add` delegated capability. |
| `options?` | `ShardStoringOptions` |  |

#### Overrides

TransformStream.constructor

#### Defined in

[packages/upload-client/src/sharding.js:86](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/sharding.js#L86)
