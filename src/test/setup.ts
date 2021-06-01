import '@testing-library/jest-dom';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(console as any).warn = (message: string) => {
  throw new Error(`Failing due to console.warn while running test!\n\n${message}`);
};

beforeEach(() => {
  expect.hasAssertions();
});
