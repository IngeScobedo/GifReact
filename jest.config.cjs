module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  globals: {
    'react-jest': {
      babelConfig: true
    }
  }
}
