import { allSettled, fork } from 'effector'

import { $isOpen, $lang, handleSetLang, setPageLanguageFx, updated } from './model'

test('Change page language and tooltip state', async () => {
	const scope = fork({
		values: [
			[$lang, 'en'],
			[$isOpen, false]
		],
		handlers: [[setPageLanguageFx, (lang) => console.log(`Language has been changed, current is - ${lang}`)]]
	})

	expect(scope.getState($isOpen)).toBe(false)
	expect(typeof scope.getState($lang) === 'string').toBeTruthy()
	expect(scope.getState($lang)).toMatch(/[en|ru]/)

	await allSettled(handleSetLang, { scope, params: 'ru' })
	await allSettled(updated, { scope, params: true })

	expect(scope.getState($isOpen)).toBe(true)
	expect(scope.getState($lang)).toBe('ru')
})
