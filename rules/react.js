module.exports = {
  env: {
    "browser": true,
    "es2020": true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off"
  }
};
