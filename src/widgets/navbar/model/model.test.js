import { allSettled, fork } from 'effector'

import { sidebar } from '.'

test('Sidebar store is about boolean true when open', async () => {
	const scope = fork({
		values: [[sidebar.$active, false]]
	})

	expect(scope.getState(sidebar.$active)).toEqual(false)

	await allSettled(sidebar.updated, { scope, params: true })

	expect(scope.getState(sidebar.$active)).toEqual(true)
})
