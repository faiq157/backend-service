// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
languageOptions:{
    parserOption:{
        project: true,
        tsconfigRootDir: __dirname,
    },
},
files:["**/*.ts"],
extends:[eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
rules:{
    "no-console": "error",
    qoutes:["error","single",{allowTemplateLiterals:true}]
}

);
