import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
})
