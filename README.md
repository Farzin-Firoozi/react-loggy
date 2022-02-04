# react-loggy

> See logs everywhere, even in production!

[![NPM](https://img.shields.io/npm/v/react-loggy.svg)](https://www.npmjs.com/package/react-loggy)
![npm](https://img.shields.io/npm/dw/react-loggy)
![npm bundle size (version)](https://img.shields.io/bundlephobia/min/react-loggy/0.0.1)
![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/react-loggy/0.0.1)
![NPM](https://img.shields.io/npm/l/react-loggy)

## Install

```bash
npm install --save react-loggy
```

or if you are using yarn :

```bash
yarn add react-loggy
```

## Usage

```tsx
import React, { Component } from 'react'

import ReactLoggy from 'react-loggy'

class Example extends Component {
  render() {
    return (
      <>
        <ReactLoggy />
        <SomeComponentGeneratingLogs />
      </>
    )
  }
}
```

## Support

If you like this package please consider giving it a star.

## Contribution

clone the project and run `yarn install` then run `yarn start` to run the main project.

then `cd example` and run `yarn start` to start the development example in order to test the component.

any PRs are welcome!

## License

MIT © [Farzin-Firoozi](https://github.com/Farzin-Firoozi)
