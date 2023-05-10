module.exports = {
  transform: {
      '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['test_reports', 'dist/', 'lib/', 'node_modules/', 'coverage/'],
  watchPathIgnorePatterns: ['test_reports', 'dist/', 'lib/', 'node_modules/', 'coverage/'],
  coveragePathIgnorePatterns: ['test_reports', 'dist/', 'lib/', 'node_modules/', 'coverage/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  verbose: true,
  testTimeout: 10000,
};
