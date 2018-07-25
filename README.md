# React String

React String allows you to render each letter of a string separately.

See it in action [here](https://www.theatelier.tech).

# Installation

```shell
npm install react-string
```

or

```shell
yarn add react-string
```

# How it works

In this example, the letters of a string will be rendered alternatively blue and red.

```javascript
import React from 'react';
import String from 'react-string';

export default () => (
  <String
    renderLetter={(letter, index) => (
      <span style={{ color: index % 2 ? 'red' : 'blue' }}>{letter}</span>
    )}
  >
    Hello world.
  </String>
);
```
