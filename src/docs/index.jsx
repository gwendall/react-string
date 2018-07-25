import React from 'react';
import { render } from 'react-dom';
import String from '../../lib';
import './styles.css';

const isOdd = n => n % 2;
const renderLetter = (letter, index) => (
  <span style={{ color: isOdd(index) ? 'red' : 'blue' }}>{letter}</span>
);

function Demo() {
  return (
    <div>
      <h1>React String</h1>
      <String renderLetter={renderLetter}>Hello world.</String>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
