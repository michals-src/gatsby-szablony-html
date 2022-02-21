const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],

  stories: ["../src/**/*.stories.[tj]s"],

  webpackFinal: async (config, { configType }) => {
    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === "/\\.css$/"
    );

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes("/css-loader/")) {
        item.options.modules = {
          mode: "local",
          localIdentName:
            configType === "PRODUCTION"
              ? "[local]__[hash:base64:5]"
              : "[name]__[local]__[hash:base64:5]",
        };
      }

      return item;
    });

    return config;
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.yml$/,
        loader: 'json!yaml',
        include: path.resolve(__dirname, '../data'),
      },
      {
        test: /\.s[ac]ss$/,
        loader: 'style!css!sass?includePaths[]=./node_modules',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file',
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};