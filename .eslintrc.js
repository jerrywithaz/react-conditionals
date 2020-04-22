module.exports = {
  parser: '@typescript-eslint/parser', 
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", 
  ],
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaVersion: 2018, 
    sourceType: 'module',  
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
