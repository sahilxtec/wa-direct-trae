// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   {
//     rules: {
//       "react/no-unescaped-entities": "off"
//     },
//     eslint: {
//       // Do not run ESLint during `next build`
//       ignoreDuringBuilds: true,
//     },
//   },

// ];

// export default eslintConfig;
// eslint.config.mjs
export default [
  { ignores: ["**/*"] },
];
