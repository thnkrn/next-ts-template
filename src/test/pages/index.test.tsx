import IndexPage from 'pages/index';
import { render } from 'test/util';

describe('Index', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<IndexPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
