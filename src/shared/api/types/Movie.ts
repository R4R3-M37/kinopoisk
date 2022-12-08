export interface ExternalId {
	kpHD?: any
	imdb: string
	tmdb: number
	_id: string
}

export interface Logo {
	_id: string
	url?: any
}

export interface Poster {
	_id: string
	url: string
	previewUrl: string
}

export interface Rating {
	_id: string
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}

export interface Votes {
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
	_id: string
}

export interface Trailers {
	url: string
	name: string
	site: string
	type: string
	_id: string
}

export interface Videos {
	_id: string
	trailers: Trailers[]
	teasers: any[]
}

export interface Budget {
	_id: string
	value: number
	currency: string
}

export interface World {
	_id: string
	value: number
	currency: string
}

export interface Russia {
	_id: string
	value: number
	currency: string
}

export interface Usa {
	_id: string
	value: number
	currency: string
}

export interface Fees {
	world: World
	russia: Russia
	usa: Usa
	_id: string
}

export interface Distributors {
	distributor: string
	distributorRelease?: any
}

export interface Premiere {
	_id: string
	country: string
	world: string
}

export interface Images {
	postersCount: number
	backdropsCount: number
	framesCount: number
}

export interface Watchability {
	_id: string
	items?: any
}

export interface ProductionCompanies {
	name: string
	url: string
	previewUrl: string
}

export interface SpokenLanguage {
	name: string
	nameEn: string
}

export interface Facts {
	value: string
	type: string
	spoiler: boolean
}

export interface Genres {
	name: string
}

export interface Countries {
	name: string
}

export interface Persons {
	id: number
	photo: string
	name: string
	enName: string
	enProfession: string
}

export interface Names {
	name: string
}

export interface Technology {
	_id: string
	hasImax: boolean
	has3D: boolean
}

export interface ImagesInfo {
	_id: string
	framesCount: number
}

export interface SequelsAndPrequel {
	_id: string
	id: number
	name?: any
	enName: string
	alternativeName: string
	type: string
	poster: Poster
}

export interface SimilarMovie {
	_id: string
	id: number
	name: string
	enName: string
	alternativeName: string
	poster: Poster
}

export interface RootMovieData {
	externalId: ExternalId
	logo: Logo
	poster: Poster
	backdrop?: any
	rating: Rating
	votes: Votes
	videos: Videos
	budget: Budget
	fees: Fees
	distributors: Distributors
	premiere: Premiere
	images: Images
	watchability: Watchability
	collections: any[]
	updateDates: any[]
	status: string
	movieLength: number
	productionCompanies: ProductionCompanies[]
	spokenLanguages: SpokenLanguage[]
	id: number | string
	type: string
	name: string
	description: string
	slogan: string
	year: number
	facts: Facts[]
	genres: Genres[]
	countries: Countries[]
	seasonsInfo: any[]
	persons: Persons[]
	lists: any[]
	typeNumber: number
	alternativeName: string
	enName?: any
	names: Names[]
	updatedAt: string
	ratingMpaa: string
	shortDescription?: any
	technology: Technology
	ticketsOnSale: boolean
	imagesInfo: ImagesInfo
	sequelsAndPrequels: SequelsAndPrequel[]
	similarMovies: SimilarMovie[]
	ageRating: number
	top10?: any
	top250?: any
	createDate: string
	releaseYears: any[]
}
