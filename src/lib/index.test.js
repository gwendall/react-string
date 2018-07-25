import React from 'react';
import renderer from 'react-test-renderer';

import String from './index';

describe('React String', () => {
  it('should render a string', () => {
    const wrapper = renderer.create(<String>hello world</String>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
