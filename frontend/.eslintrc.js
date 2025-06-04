module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
   globals: {
    __webpack_public_path__: 'readonly',
    __webpack_require__: 'readonly',
    __webpack_modules__: 'readonly',
    __webpack_exports__: 'readonly'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'eol-last': 'off',
    'vue/require-prop-types': 'error',
    'no-undef': 'error',
    'camelcase': ['error', { 
      allow: [
        '^__webpack_',
        '^__unused_webpack_'
      ]
    }],
  'no-eval': ['error', { allowIndirect: true }]
  }
}
