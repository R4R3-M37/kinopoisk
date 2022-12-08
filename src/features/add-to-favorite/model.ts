import { createEffect, createEvent, restore, sample } from 'effector'

const initialStore: string[] = JSON.parse(localStorage.getItem('favorites') || '[]')

export const setToLocalStorageFx = createEffect((value: string[]) => {
	const ids = localStorage.getItem('favorites')

	if (!ids) {
		localStorage.setItem('favorites', '[]')
	}

	localStorage.setItem('favorites', JSON.stringify(value))
})
export const addedToFavorite = createEvent<string>()
export const setFavorites = createEvent<string[]>()
export const removedFromFavorite = createEvent<string>()
export const $favorites = restore<string[]>(setFavorites, initialStore)

window.addEventListener('storage', ({ newValue, key }) => {
	if (key === 'favorites' && newValue) {
		const favorites: string[] | unknown = [...new Set(JSON.parse(newValue))]
		setFavorites(favorites as string[])
	}
})

sample({
	clock: addedToFavorite,
	source: $favorites,
	fn: (state, payload) => [...state, payload],
	target: $favorites
})

sample({
	clock: removedFromFavorite,
	source: $favorites,
	fn: (state, payload) => state.filter((id) => id !== payload),
	target: $favorites
})

sample({
	source: $favorites,
	fn: (favorites) => favorites,
	target: setToLocalStorageFx
})
