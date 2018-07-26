import React from 'react';

const String = ({ renderChar = x => x, children, ...props }) =>
  typeof children === 'string' && children.split('').map((x, i) => renderChar(x, i));

export default String;
