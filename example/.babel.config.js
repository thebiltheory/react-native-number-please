module.exports = {
  presets: ['expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-number-please': '../src',
        },
      },
    ],
  ],
};
