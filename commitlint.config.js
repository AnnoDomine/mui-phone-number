export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'ci',
        'test',
        'docs',
        'dev',
        'major*',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'deps',
        'unit',
        'component',
        'env',
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
  },
};
