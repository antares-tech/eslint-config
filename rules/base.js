module.exports = {
	extends: "eslint:recommended",
	rules: {
		// https://eslint.org/docs/latest/rules/indent
		"indent": ["warn", "tab", { "SwitchCase" : 2 }],

		// https://eslint.org/docs/latest/rules/linebreak-style
		"linebreak-style": ["warn", "unix"],

		// https://eslint.org/docs/latest/rules/quotes
		"quotes": ["warn", "single"],

		// https://eslint.org/docs/latest/rules/semi 
		"semi": ["warn", "always"],

		// https://eslint.org/docs/latest/rules/no-unused-vars
		"no-unused-vars": ["warn", { "args": "none" }],

		// https://eslint.org/docs/latest/rules/space-before-function-paren
		"space-before-function-paren": ["warn", "always"],

		// https://eslint.org/docs/latest/rules/space-before-keywords
		"keyword-spacing": ["warn"],

		// https://eslint.org/docs/latest/rules/comma-dangle
		"comma-dangle": ["warn", "always-multiline"],

		// https://eslint.org/docs/latest/rules/func-call-spacing
		"func-call-spacing": ["warn", "always"],

		// https://eslint.org/docs/latest/rules/key-spacing
		"key-spacing": ["warn", { "beforeColon": true, "afterColon": true, "mode": "minimum" }],

		// https://eslint.org/docs/latest/rules/object-curly-spacing
		"object-curly-spacing": ["warn", "always"],

		// https://eslint.org/docs/latest/rules/eqeqeq
		"eqeqeq" : ["warn", "always"],

		// https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
		"no-mixed-spaces-and-tabs" : ["error"],

		// https://eslint.org/docs/latest/rules/eol-last
		"eol-last": ["warn", "always"],

		// https://eslint.org/docs/latest/rules/no-var
		"no-var": ["warn"],

		//https://eslint.org/docs/latest/rules/no-trailing-spaces
		"no-trailing-spaces" : ["warn", {"skipBlankLines" : false, "ignoreComments" : false }]
	},
};
