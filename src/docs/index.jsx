import React from 'react';
import { render } from 'react-dom';
import String from '../../lib';
import './styles.css';

function Demo() {
  return (
    <div>
      <h1>React String</h1>
      <String
        renderChar={(letter, index) => (
          <span style={{ color: index % 2 ? 'red' : 'blue' }}>{letter}</span>
        )}
      >
        Hello world.
      </String>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
