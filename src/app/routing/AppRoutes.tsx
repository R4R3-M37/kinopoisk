import { Route } from 'atomic-router-react'
import React from 'react'

import { AnimesPage } from '~/pages/animes/AnimesPage'
import { FavoritesPage } from '~/pages/favorites/FavoritesPage'
import { HomePage } from '~/pages/home/HomePage'
import { MoviePage } from '~/pages/movies/MoviePage'
import { MoviesPage } from '~/pages/movies/MoviesPage'
import { PersonPage } from '~/pages/person/PersonPage'
import { PlaylistPage } from '~/pages/playlist/PlaylistPage'
import { SeriesPage } from '~/pages/series/SeriesPage'

import {
	animeRoute,
	animesRoute,
	cartoonRoute,
	favoritesRoute,
	homeRoute,
	movieRoute,
	moviesRoute,
	personRoute,
	playlistRoute,
	serialRoute,
	seriesRoute
} from '~/shared/routes'

export const AppRoutes = () => {
	return (
		<>
			<Route route={homeRoute} view={HomePage} />
			<Route route={moviesRoute} view={MoviesPage} />
			<Route route={seriesRoute} view={SeriesPage} />
			<Route route={animesRoute} view={AnimesPage} />
			<Route route={favoritesRoute} view={FavoritesPage} />
			{/*    ||    */}
			<Route route={personRoute} view={PersonPage} />
			<Route route={movieRoute} view={MoviePage} />
			<Route route={serialRoute} view={MoviePage} />
			<Route route={animeRoute} view={MoviePage} />
			<Route route={cartoonRoute} view={MoviePage} />
			<Route route={playlistRoute} view={PlaylistPage} />
		</>
	)
}
