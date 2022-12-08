interface ExternalId {
	kpHD: string
	imdb: string
	_id: string
}

interface Poster {
	_id: string
	url: string
	previewUrl: string
}

interface Rating {
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
	_id: string
}

interface Votes {
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
	_id: string
}

interface Names {
	_id: string
	name: string
}

export interface Movie {
	externalId: ExternalId
	poster: Poster
	rating: Rating
	votes: Votes
	movieLength: number
	id: number
	type: string
	name: string
	description: string
	year: number
	alternativeName: string
	enName?: string
	names: Names[]
	shortDescription: string
	releaseYears: number[] | []
}

export interface MovieRoot {
	docs: Movie[]
	total: number
	limit: number
	page: number
	pages: number
}
