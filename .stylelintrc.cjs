/* eslint-disable no-undef */
module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-html/vue"
  ],
  overrides: [
    {
      files: ["**/*.{vue,html}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.{css,scss}"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    // 允许 global 、export 、v-deep等伪类
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "export","v-deep", "deep"],
      },
    ],
  }
}