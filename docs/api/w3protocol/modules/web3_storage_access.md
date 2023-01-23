---
id: "web3_storage_access"
title: "Module: @web3-storage/access"
sidebar_label: "@web3-storage/access"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [Encoding](../namespaces/web3_storage_access.Encoding.md)

## Classes

- [Agent](../classes/web3_storage_access.Agent.md)
- [AgentData](../classes/web3_storage_access.AgentData.md)
- [StoreConf](../classes/web3_storage_access.StoreConf.md)
- [StoreIndexedDB](../classes/web3_storage_access.StoreIndexedDB.md)

## Functions

### connection

▸ **connection**<`Service`, `T`\>(`options?`): `ConnectionView`<`Service`\>

Creates a Ucanto connection for the w3access API

Usage:

```js
import { connection } from '@web3-storage/access/agent'
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Service` | extends `Service` |  |
| `T` | extends \`did:${string}:${string}\` | DID method |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` |  |
| `options.channel` | `undefined` \| `Channel`<`Service`\> | Ucanto channel to use |
| `options.fetch` | `undefined` \| (`input`: `URL` \| `RequestInfo`, `init?`: `RequestInit`) => `Promise`<`Response`\> | Fetch implementation to use |
| `options.principal` | `undefined` \| `Principal`<`T`\> | w3access API Principal |
| `options.url` | `undefined` \| `URL` | w3access API URL |

#### Returns

`ConnectionView`<`Service`\>

#### Defined in

[packages/access-client/src/agent.js:49](https://github.com/web3-storage/w3-protocol/blob/f7a9871/packages/access-client/src/agent.js#L49)
