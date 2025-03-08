import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,

});


const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules:{
      "react/jsx-key": [1, { "checkFragmentShorthand": true }]//transformando miss key num warning ao inves de um erro(como deveria ser default)
    }
  }),
];

export default eslintConfig;
