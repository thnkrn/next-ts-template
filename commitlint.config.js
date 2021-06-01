module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // This is same as the default, put here for referencing
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
