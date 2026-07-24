import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-var': 'error',                 
      'semi': ['error', 'always'],        
      'quotes': ['error', 'single'],    
      'eqeqeq': 'error',                  
      'no-console': 'warn',              
    },
  },
];