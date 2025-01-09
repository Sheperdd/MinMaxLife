// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
module.exports = wrapWithReanimatedMetroConfig(module.exports);
