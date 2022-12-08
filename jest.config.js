/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
	rootDir: '.',
	roots: ['./src'],
	moduleNameMapper: {
		'~/(.*)': '<rootDir>/src/$1'
	},
	moduleDirectories: ['node_modules', 'src'],
	clearMocks: true,
	coveragePathIgnorePatterns: ['/node_modules/'],
	coverageProvider: 'v8',
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/']
}
