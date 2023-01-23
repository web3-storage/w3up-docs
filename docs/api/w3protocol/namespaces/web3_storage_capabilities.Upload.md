---
id: "web3_storage_capabilities.Upload"
title: "Namespace: Upload"
sidebar_label: "Upload"
custom_edit_url: null
---

[@web3-storage/capabilities](../modules/web3_storage_capabilities.md).Upload

Upload Capabilities

These can be imported directly with:
```js
import * as Account from '@web3-storage/capabilities/upload'
```

## Variables

### add

• `Const` **add**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

Capability allows an agent to add an arbitrary DAG (root) to the upload list
of the specified (memory) space (identified by did:key in the `with` field).
It is recommended to provide an optional list of shard links that contain
fragments of this DAG, as it allows system to optimize block discovery, it is
also a way to communicate DAG partiality - this upload contains partial DAG
identified by the given `root`.

Usually when agent wants to upload a DAG it will encode it as a one or more
CAR files (shards) and invoke `store/add` capability for each one. Once all
shards are stored it will invoke `upload/add` capability (providing link to
a DAG root and all the shards) to add it the upload list.

That said `upload/add` could be invoked without invoking `store/add`s e.g.
because another (memory) space may already have those CARs.

Note: If DAG with the given root is already in the upload list, invocation
will simply update `shards` to be a union of existing and new shards.

#### Defined in

[packages/capabilities/src/upload.js:69](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/upload.js#L69)

___

### all

• `Const` **all**: `CapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

#### Defined in

[packages/capabilities/src/upload.js:162](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/upload.js#L162)

___

### list

• `Const` **list**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

Capability can be invoked to request a list of uploads in the (memory) space
identified by the `with` field.

#### Defined in

[packages/capabilities/src/upload.js:139](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/upload.js#L139)

___

### remove

• `Const` **remove**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

Capability removes an upload (identified by it's root CID) from the upload
list. Please note that removing an upload does not delete corresponding shards
from the store, however that could be done via `store/remove` invocations.

#### Defined in

[packages/capabilities/src/upload.js:107](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/upload.js#L107)

___

### upload

• `Const` **upload**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>

Capability can only be delegated (but not invoked) allowing audience to
derived any `upload/` prefixed capability for the (memory) space identified
by did:key in the `with` field.

#### Defined in

[packages/capabilities/src/upload.js:21](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/upload.js#L21)
