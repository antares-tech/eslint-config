module.exports = {
	extends: [
		'./rules/base',
		'./rules/node',
	].map(require.resolve),
	rules: {}
};
