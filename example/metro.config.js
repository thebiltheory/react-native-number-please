const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const fs = require('fs');
const exclusionList = require('metro-config/src/defaults/exclusionList');

function escape(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

const root = path.resolve(__dirname, '..');
const pak = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf8')
);

const defaultConfig = getDefaultConfig(__dirname);

const modules = [
  '@babel/runtime',
  'react-native-number-please',
  ...Object.keys({
    ...pak.dependencies,
    ...pak.peerDependencies,
  }),
];

module.exports = {
  ...defaultConfig,

  projectRoot: __dirname,
  watchFolders: [root],

  resolver: {
    ...defaultConfig.resolver,

    blacklistRE: exclusionList([
      new RegExp(`^${escape(path.join(root, 'node_modules'))}\\/.*$`),
    ]),

    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    }, {}),
  },
};
