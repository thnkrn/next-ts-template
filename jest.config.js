module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'clover', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    'components/(.*)': '<rootDir>/src/components/$1',
    'pages/(.*)': '<rootDir>/src/pages/$1',
    'test/(.*)': '<rootDir>/src/test/$1',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next|out)[/\\\\]'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
};
