# ng2-template-concat

[![npm](https://img.shields.io/npm/v/ng2-template-concat.svg)](
    https://www.npmjs.com/package/ng2-template-concat
) [![node](https://img.shields.io/node/v/ng2-template-concat.svg)](
    https://nodejs.org/
) [![Libraries.io for GitHub](https://img.shields.io/librariesio/github/dead-beef/ng2-template-concat.svg)](
    https://libraries.io/npm/ng2-template-concat/
) [![license](https://img.shields.io/github/license/dead-beef/ng2-template-concat.svg)](
    https://github.com/dead-beef/ng2-template-concat/blob/master/LICENSE
)

## Overview

Concatenate Angular 2+ templates.

## Requirements

- [`Node.js`](https://nodejs.org/)
- [`NPM`](https://nodejs.org/)

## Installation

```bash
npm install ng2-template-concat
```

## Usage

### CLI

```bash
  Usage: ng2-template-concat [options] <file...>


  Options:

    -V, --version        output the version number
    -r, --root <path>    template root path (default: process.cwd)
    -o, --output <path>  output file path (default: stdout)
    -h, --help           output usage information
```

### Module

```js
const concat = require('ng2-template-concat');
let js = concat.module(rootPath, [file1, file2, file3]);
```

## Licenses

* [`ng2-template-concat`](https://github.com/dead-beef/ng2-template-concat/blob/master/LICENSE)
