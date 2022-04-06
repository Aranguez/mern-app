// Cannot load "react-refresh/babel" in production or test
const plugins = [];

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins,
};
