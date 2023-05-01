# React Ticker

[![NPM](https://img.shields.io/npm/v/solid-text-hover-animations.svg)](https://www.npmjs.com/package/solid-text-hover-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**React Ticker** is a lightweight, performant React component, that moves text, images and videos infinitely like a newsticker.

It can be used to replace the deprecated `marquee`-HTML-tag.

<!-- **[Check out the Demo!](https://andreasfaust.github.io/solid-text-hover-animations/)** -->

## Getting started

1. Install the package with **npm** or **yarn**

   `npm install solid-text-hover-animations`

   `yarn add solid-text-hover-animations`

2. Use it in your React components!

```javascript
import HoverAnimation from 'solid-text-hover-animations';

const Header = () => (
  <nav>
    <HoverAnimation text='About' effect='wring' />
  </nav>
);

export default Header;
```
