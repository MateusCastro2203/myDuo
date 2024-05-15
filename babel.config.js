// @ts-ignore
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@device': './src/libs/device',
        },
      },
    ],
  ],
};
