module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "babel-plugin-styled-components",
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@src": "./src",
          "@assets": "./src/assets",
          "@atoms": "./src/atoms",
          "@organisms": "./src/organisms",
          "@templates": "./src/templates",
          "@molecules": "./src/molecules",
          "@externalAssets": "assets/",
          "@constants": "./src/constants",
          "@global": "./src/global",
          "@hooks": "./src/hooks",
          "@features": "./src/features",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@stacks": "./src/stacks",
          "@store": "./src/store",
        },
      },
    ],
  ],
};
