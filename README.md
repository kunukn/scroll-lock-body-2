# scroll-lock-body

[![License](https://badgen.net/github/license/kunukn/scroll-lock-body-2)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/scroll-lock-body-2)](https://bundlephobia.com/result?p=scroll-lock-body-2)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/scroll-lock-body-2)](https://bundlephobia.com/result?p=scroll-lock-body-2)

## About

Minimal code to enable scroll lock on the body element.<br>
This uses the approach from Bootstrap modal components.

## Demo

- <a href="https://vd53k.csb.app/" target="_blank" rel="noopener noreferrer">Codesandbox view</a>

- <a href="https://codesandbox.io/s/scroll-lock-body-2-demo-vd53k" target="_blank" rel="noopener noreferrer">Codesandbox edit</a>

- <a href="https://codepen.io/kunukn/full/mdWymRj" target="_blank" rel="noopener noreferrer">Codepen view</a>

- <a href="https://codepen.io/kunukn/pen/mdWymRj" target="_blank" rel="noopener noreferrer">Codepen edit</a>

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
yarn add scroll-lock-body-2

# For npm, use the command below.
npm install scroll-lock-body-2 --save
```

### Usage

```js
import {
  enableScrollLock,
  disableScrollLock,
  isScrollLockEnabled,
  getScrollbarWidth,
} from 'scroll-lock-body-2';
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/scroll-lock-body-2"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/scroll-lock-body-2"></script>

<script>
  // UMD module is exposed through the "scrollLockBody" global variable.
  console.log(scrollLockBody);
</script>
```

## Explore the dist files

https://unpkg.com/scroll-lock-body-2/

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
