import { createQuery } from '@farfetched/core'

const TOKEN = '97CT04G-7VT48YR-G0FYQ1R-BF92T79'
const BASE_URL = 'https://api.kinopoisk.dev'
export const CURRENT_YEAR: number = new Date().getFullYear()

export const moviesQuery = createQuery({
	handler: async ({ page }) => {
		const apiUrl = `/movie?field=rating.kp&search=1-10&field=year&search=${CURRENT_YEAR}&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.kp&sortType=-1`
		const url = `${BASE_URL}${apiUrl}&limit=10&page=${page}&token=${TOKEN}`
		const response = await fetch(url)

		return response.json()
	}
})

export const seriesQuery = createQuery({
	handler: async ({ page }) => {
		const apiUrl = `/movie?field=rating.kp&search=1-10&field=year&search=${CURRENT_YEAR}&field=typeNumber&search=2&limit=10&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1`
		const url = `${BASE_URL}${apiUrl}&limit=10&page=${page}&token=${TOKEN}`
		const response = await fetch(url)

		return response.json()
	}
})

export const animesQuery = createQuery({
	handler: async ({ page }) => {
		const apiUrl = `/movie?field=rating.kp&search=1-10&field=year&search=${CURRENT_YEAR}&field=typeNumber&search=4&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1`
		const url = `${BASE_URL}${apiUrl}&limit=10&page=${page}&token=${TOKEN}`
		const response = await fetch(url)

		return response.json()
	}
})

export const favoritesQuery = createQuery({
	handler: async ({ page, ids }: { page: number; ids: string[] }) => {
		const favorites = ids.map((id) => `search=${id}&field=id`).join('&')

		const apiUrl = `/movie?search[]=1-10&field=rating.kp&${favorites}`
		const url = `${BASE_URL}${apiUrl}&limit=10&page=${page}&token=${TOKEN}`
		const response = await fetch(url)

		return response.json()
	}
})

export const movieByIdQuery = createQuery({
	handler: async ({ id }) => {
		const apiUrl = `/movie?search=${id}&field=id`
		const url = `${BASE_URL}${apiUrl}&token=${TOKEN}`
		const response = await fetch(url)
		console.log(url)
		return response.json()
	}
})
