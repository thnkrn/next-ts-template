import React from 'react';
import AboutPage from 'pages/about';
import { render } from 'test/util';

describe('About', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<AboutPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
