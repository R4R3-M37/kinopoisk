module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', 'atomic-router/babel-preset'],
	plugins: [[
		'effector-logger/babel-plugin',
		{
			'inspector': true,
			'effector': {
				'factories': ['@farfetched/core', '@farfetched/react']
			}
		}
	],
	'effector/babel-plugin']
}
