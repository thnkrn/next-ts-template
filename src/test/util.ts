import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import userEvent from '@testing-library/user-event';

const Providers = ({ children }: { children: ReactNode }) => children;

const customRender = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: ReactNode,
  options = {}
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
) => render(ui as any, { wrapper: Providers as any, ...options });

export * from '@testing-library/react';

export { customRender as render, userEvent };
