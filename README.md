# React String

React String allows you to render each letter of a string separately. See it in action [here](https://www.theatelier.tech).

# Installation

```shell
npm install react-string
```

or

```shell
yarn add react-string
```

# How it works

In this example, the letters of the string "hello world." will be rendered alternatively blue and red.

```javascript
import React from 'react';
import String from 'react-string';

const isOdd = n => n % 2;
const renderLetter = (letter, index) => (
  <span style={{ color: isOdd(index) ? 'red' : 'blue' }}>{letter}</span>
);
const EXAMPLE_STRING = 'Hello world.';
export default () => <String renderLetter={renderLetter}>{EXAMPLE_STRING}</String>;
```
