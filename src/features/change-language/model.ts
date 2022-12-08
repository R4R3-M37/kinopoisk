import { createEffect, createEvent, createStore, restore, sample } from 'effector'

import i18n from '~/i18n'

export const setPageLanguageFx = createEffect((lang: string) => {
	i18n.changeLanguage(lang)
})

export const $lang = createStore<string>(i18n.language || 'en')
export const handleSetLang = createEvent<string>()

export const updated = createEvent<boolean>()
export const $isOpen = restore<boolean>(updated, false)

sample({
	clock: handleSetLang,
	target: [$lang, setPageLanguageFx]
})
