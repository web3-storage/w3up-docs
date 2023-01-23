---
id: "web3_storage_capabilities.Voucher"
title: "Namespace: Voucher"
sidebar_label: "Voucher"
custom_edit_url: null
---

[@web3-storage/capabilities](../modules/web3_storage_capabilities.md).Voucher

Voucher Capabilities

These can be imported directly with:
```js
import * as Account from '@web3-storage/capabilities/voucher'
```

## References

### top

Re-exports [top](web3_storage_capabilities.Space.md#top)

## Variables

### Identity

• `Const` **Identity**: `Schema`<`URI`<``"mailto:"``\>, `unknown`\>

Verifiable identity to whom voucher is issued. Currently it is a `mailto:`
URL.

#### Defined in

[packages/capabilities/src/voucher.js:29](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/voucher.js#L29)

___

### Product

• `Const` **Product**: `Schema`<`URI`<\`${string}:\`\>, `unknown`\>

Products are identified by the CID of the DAG that describes them.

#### Defined in

[packages/capabilities/src/voucher.js:23](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/voucher.js#L23)

___

### Service

• `Const` **Service**: `Schema`<\`did:${string}:${string}\` & \`did:${string}\` & `Phantom`<{}\>, `any`\>

Services are identified using a decentralized identifier.

#### Defined in

[packages/capabilities/src/voucher.js:34](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/voucher.js#L34)

___

### claim

• `Const` **claim**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\> \| `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

Capability can be invoked by an agent to claim a voucher for a specific
user identifier (currently email address).

The agent MAY issue claim with own DID or a DID it is delegate of. If `with`
is different from `iss`, it is implied that the voucher is claimed for the
DID in the `with` field. If `with` is same as `iss` it is implies that
voucher is claimed for an unspecified `did`.

#### Defined in

[packages/capabilities/src/voucher.js:64](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/voucher.js#L64)

___

### redeem

• `Const` **redeem**: `TheCapabilityParser`<`DerivedMatch`<{}, `DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>\>

#### Defined in

[packages/capabilities/src/voucher.js:99](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/voucher.js#L99)

___

### voucher

• `Const` **voucher**: `TheCapabilityParser`<`DerivedMatch`<{}, `CapabilityMatch`<``"*"``, `URI`<``"did:"``\>, {}\>\>\>

Capability can only be delegated (but not invoked) allowing audience to
derived any `voucher/` prefixed capability for the (memory) space identified
by did:key in the `with` field.

Currently DID in the `with` field will always be web3.storage DID since we
do not support other types of vouchers yet.

#### Defined in

[packages/capabilities/src/voucher.js:44](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/capabilities/src/voucher.js#L44)
