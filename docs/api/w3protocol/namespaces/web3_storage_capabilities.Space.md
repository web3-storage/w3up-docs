---
id: "web3_storage_capabilities.Space"
title: "Namespace: Space"
sidebar_label: "Space"
custom_edit_url: null
---

[@web3-storage/capabilities](../modules/web3_storage_capabilities.md).Space

Space Capabilities

These can be imported directly with:
```js
import * as Space from '@web3-storage/capabilities/space'
```

## Namespaces

- [Store](web3_storage_capabilities.Space.Store.md)

## Variables

### info

• `Const` **info**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

`space/info` can be derived from any of the `store/*`
capability that has matching `with`. This allows store service
to identify account based on any user request.

#### Defined in

[packages/capabilities/src/space.js:39](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/space.js#L39)

___

### recover

• `Const` **recover**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

#### Defined in

[packages/capabilities/src/space.js:67](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/space.js#L67)

___

### recoverValidation

• `Const` **recoverValidation**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

#### Defined in

[packages/capabilities/src/space.js:55](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/space.js#L55)

___

### space

• `Const` **space**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>

#### Defined in

[packages/capabilities/src/space.js:23](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/space.js#L23)

___

### top

• `Const` **top**: `TheCapabilityParser`<`CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>

Represents the top `{ can: '*', with: 'did:key:zAlice' }` capability, which we often
also call account linking.

**`See`**

[https://github.com/ucan-wg/spec#52-top](https://github.com/ucan-wg/spec#52-top)

#### Defined in

[packages/capabilities/src/top.js:21](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/top.js#L21)
