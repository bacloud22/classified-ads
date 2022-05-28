export default {
    extends: ["eslint:recommended", "prettier"],
    env: {
        browser: true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    rules: {
        "indent": ["error", 4]
    }
  
};