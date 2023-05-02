# Solid Text Hover Animations

[![NPM](https://img.shields.io/npm/v/solid-text-hover-animations.svg)](https://www.npmjs.com/package/solid-text-hover-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**Solid Text Hover Animations** is a lightweight and easy-to-use SolidJS component that creates text animations on hover.

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
    <HoverAnimation text='About' />
  </nav>
);

export default Header;
```

## Props

| **Name** | **Type** | **Default** | **Description**                                                                                                                                         |
| :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mode     | string   | `wring`     | `wring` The string will rotate as if being wrung out. <br> `rotate` The string will rotate in 3D fashion, with a duplicate string appearing from below. |
| stagger  | boolean  | `true`      | When set to true, the animations will stagger for each character of the string. When set to false, the whole string will animate as one.                |

## Dependencies

Solid Text Hover Animations has no dependecies besides Solid.

## Browser Support

Solid Text Hover Animations should work in all current browsers as well as Internet Explorer 11. If you discover bugs in older browser versions, please file an [issue](https://github.com/idealmilk/solid-text-hover-animations/issues)!

## Contributing

Every contribution is very much appreciated.
Feel free to file bugs, feature- and pull-requests.

**If this plugin is helpful for you, please star it on [GitHub](https://github.com/idealmilk/solid-text-hover-animations/).**

## License

MIT © [https://github.com/idealmilk](https://github.com/https://github.com/idealmilk)
