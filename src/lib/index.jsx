import React from 'react';

const String = ({ renderLetter = x => x, children, ...props }) =>
  typeof children === 'string' && children.split('').map((x, i) => renderLetter(x, i));

export default String;
