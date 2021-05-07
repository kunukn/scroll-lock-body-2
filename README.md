# scroll-lock-body

[![License](https://badgen.net/github/license/kunukn/scroll-lock-body-2)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/scroll-lock-body-2)](https://bundlephobia.com/result?p=scroll-lock-body-2)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/scroll-lock-body-2)](https://bundlephobia.com/result?p=scroll-lock-body-2)

## About

Minimal code to enable scroll lock on the body element.
This uses the approach from Bootstrap modal components.
Some code are copied from the Bootstrap repository.

<!-- ## Demo

- <a href="https://nol5t.csb.app/" target="_blank" rel="noopener noreferrer">Codesandbox view</a>

- <a href="https://codesandbox.io/s/scroll-lock-body-demo-nol5t" target="_blank" rel="noopener noreferrer">Codesandbox edit</a>

- <a href="https://codepen.io/kunukn/full/yLgZovx" target="_blank" rel="noopener noreferrer">Codepen view</a>

- <a href="https://codepen.io/kunukn/pen/yLgZovx" target="_blank" rel="noopener noreferrer">Codepen edit</a>

- <a href="https://2esfs.csb.app" target="_blank" rel="noopener noreferrer">Vue view</a>

- <a href="https://codesandbox.io/s/vue-scroll-lock-body-demo-2esfs" target="_blank" rel="noopener noreferrer">Vue edit</a> -->

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
