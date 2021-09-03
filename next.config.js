const { getThemeVariables } = require("antd/dist/theme");
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  modifyVars: {
    ...getThemeVariables({
      dark: true, // Enable dark mode
      compact: true, // Enable compact mode
    }),
    "@body-background": "#0f0d0f",
    "@primary-color": "#cab44a",
    "@text-color": "#f8fabb",
    "@heading-color": "#cab44a",
    "@font-family": '"Nunito", sans-serif',
  },
  reactStrictMode: true,
  target: "serverless",
});
