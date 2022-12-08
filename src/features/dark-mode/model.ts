import { createEffect, createEvent, restore } from 'effector'

const initialState = localStorage.getItem('theme') || 'white'

const setThemeFx = createEffect((theme: string) => {
	localStorage.setItem('theme', theme)

	document.body.setAttribute('class', theme)
	const root = document.querySelector(':root') as HTMLElement
	root.style.setProperty('color-scheme', theme)
})

export const update = createEvent<string>()

export const $theme = restore<string>(update, initialState)
$theme.watch(setThemeFx)
