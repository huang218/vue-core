# @vue/runtime-core

> This package is published only for typing and building custom renderers. It is NOT meant to be used in applications.

> 有关完全公开的API，请参阅“src/index.ts”。
For full exposed APIs, see `src/index.ts`.

## Building a Custom Renderer

```ts
import { createRenderer } from '@vue/runtime-core'

const { render, createApp } = createRenderer({
  patchProp,
  insert,
  remove,
  createElement
  // ...
})

// `render` is the low-level API
// `createApp` returns an app instance with configurable context shared
// by the entire app tree.
export { render, createApp }

export * from '@vue/runtime-core'
```

See `@vue/runtime-dom` for how a DOM-targeting renderer is implemented.
