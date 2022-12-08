import { allSettled, fork } from 'effector'
import { $favorites, addedToFavorite, setFavorites } from './model'

test('Set or get from local storage', async () => {
	const scope = fork({
		values: [[$favorites, []]]
	})
	const ids = ['24234', '87933', '98582']

	expect(Array.isArray(scope.getState($favorites))).toBeTruthy()
	expect(scope.getState($favorites)).toHaveLength(0)

	await allSettled(addedToFavorite, { scope, params: '666' })
	expect(scope.getState($favorites)).toContain('666')

	await allSettled(setFavorites, { scope, params: ids })
	expect(scope.getState($favorites)).not.toHaveLength(0)
	expect(scope.getState($favorites).every((id) => typeof id === 'string')).toBeTruthy()
})
