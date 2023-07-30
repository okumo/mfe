const { merge } = require("webpack-merge");
const ModuleFedarationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    fileName: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFedarationPlugin({
      name: "marketing",
      fileName: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
