import prettierPlugin from "eslint-plugin-prettier"
import reactPlugin from "eslint-plugin-react"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			prettier: prettierPlugin,
			react: reactPlugin,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: path.resolve(__dirname, "./tsconfig.app.json"), // Usa tsconfig.app.json
				ecmaVersion: 2021,
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			eqeqeq: ["error", "always"],
			"react/prop-types": "off",
			"no-unused-vars": ["warn", { args: "none" }],
			"prettier/prettier": ["error", { endOfLine: "auto" }],
		},
	},
]
