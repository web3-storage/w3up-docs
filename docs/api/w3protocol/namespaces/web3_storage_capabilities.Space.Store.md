---
id: "web3_storage_capabilities.Space.Store"
title: "Namespace: Store"
sidebar_label: "Store"
custom_edit_url: null
---

[@web3-storage/capabilities](../modules/web3_storage_capabilities.md).[Space](web3_storage_capabilities.Space.md).Store

Store Capabilities

These can be imported directly with:
```js
import * as Account from '@web3-storage/capabilities/store'
```

## Variables

### add

• `Const` **add**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

`store/add` capability allows agent to store a CAR file into a (memory) space
identified by did:key in the `with` field. Agent must precompute CAR locally
and provide it's CID and size using `nb.link` and `nb.size` fields, allowing
a service to provision a write location for the agent to PUT or POST desired
CAR into.

#### Defined in

[packages/capabilities/src/store.js:51](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/store.js#L51)

___

### all

• `Const` **all**: `CapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

#### Defined in

[packages/capabilities/src/store.js:170](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/store.js#L170)

___

### list

• `Const` **list**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

Capability can be invoked to request a list of stored CAR files in the
(memory) space identified by `with` field.

#### Defined in

[packages/capabilities/src/store.js:135](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/store.js#L135)

___

### remove

• `Const` **remove**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

Capability can be used to remove the stored CAR file from the (memory)
space identified by `with` field.

#### Defined in

[packages/capabilities/src/store.js:108](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/store.js#L108)

___

### store

• `Const` **store**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>

Capability can only be delegated (but not invoked) allowing audience to
derived any `store/` prefixed capability for the (memory) space identified
by did:key in the `with` field.

#### Defined in

[packages/capabilities/src/store.js:20](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/store.js#L20)
