---
id: "web3_storage_upload_client.ShardingStream"
title: "Class: ShardingStream"
sidebar_label: "ShardingStream"
custom_edit_url: null
---

[@web3-storage/upload-client](../modules/web3_storage_upload_client.md).ShardingStream

Shard a set of blocks into a set of CAR files. By default the last block
received is assumed to be the DAG root and becomes the CAR root CID for the
last CAR output. Set the `rootCID` option to override.

## Hierarchy

- `TransformStream`

  ↳ **`ShardingStream`**

## Constructors

### constructor

• **new ShardingStream**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ShardingOptions` |

#### Overrides

TransformStream.constructor

#### Defined in

[packages/upload-client/src/sharding.js:19](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/upload-client/src/sharding.js#L19)
