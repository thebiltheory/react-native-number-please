// "jest": {
//     "preset": "react-native",
//     "moduleFileExtensions": [
//       "ts",
//       "tsx",
//       "js"
//     ],
//     "transform": {
//       "^.+\\.(js)$": "babel-jest",
//       "\\.(ts|tsx)$": "ts-jest"
//     },
//     "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
//     "testPathIgnorePatterns": [
//       "\\.snap$",
//       "<rootDir>/node_modules/"
//     ],
//     "cacheDirectory": ".jest/cache"
//   }

const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(js|ts|tsx)$':
      '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
};
