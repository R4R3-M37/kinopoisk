import { allSettled, fork } from 'effector'

import { $theme, update } from './model'

test('Use dark mode', async () => {
	const scope = fork({
		values: [[$theme, 'white']]
	})

	expect(typeof scope.getState($theme) === 'string').toBeTruthy()

	await allSettled(update, { scope, params: 'dark' })

	expect(scope.getState($theme)).toMatch(/[white|dark]/)
})
