export default {
    extends: ["eslint:recommended", "prettier"],
    env: {
        node: true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {
        "indent": ["error", 4]
    }
  
};