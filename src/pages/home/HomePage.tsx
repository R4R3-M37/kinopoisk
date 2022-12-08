// #TODO Refactor this useEffects

import { useQuery } from '@farfetched/react'
import React, { useEffect, useState } from 'react'

import { Movies } from '~/widgets/movies/Movies'

import { animesQuery, moviesQuery, seriesQuery } from '~/shared/api'
import { Movie } from '~/shared/api/types'

export const HomePage = () => {
	// movies
	const [movies, setMovies] = useState<Movie[]>([])
	const [moviesPage, setMoviesPage] = useState<number>(1)
	const { data: moviesData, pending: moviesPending } = useQuery(moviesQuery)

	// series
	const [series, setSeries] = useState<Movie[]>([])
	const [seriesPage, setSeriesPage] = useState<number>(1)
	const { data: seriesData, pending: seriesPending } = useQuery(seriesQuery)

	// animes
	const [animes, setAnimes] = useState<Movie[]>([])
	const [animesPage, setAnimesPage] = useState<number>(1)
	const { data: animesData, pending: animesPending } = useQuery(animesQuery)

	useEffect(() => {
		if (moviesData) {
			setMovies([...movies, ...moviesData.docs])
		}
	}, [moviesData])

	useEffect(() => {
		if (seriesData) {
			setSeries([...series, ...seriesData.docs])
		}
	}, [seriesData])

	useEffect(() => {
		if (animesData) {
			setAnimes([...animes, ...animesData.docs])
		}
	}, [animesData])

	useEffect(() => {
		moviesQuery.start({ page: moviesPage })
	}, [moviesPage])

	useEffect(() => {
		seriesQuery.start({ page: seriesPage })
	}, [seriesPage])

	useEffect(() => {
		animesQuery.start({ page: animesPage })
	}, [animesPage])

	useEffect(() => {
		setMovies([])
		setSeries([])
		setAnimes([])
	}, [])

	return (
		<>
			<Movies
				data={movies}
				title={`Фильмы ${new Date().getFullYear()}`}
				page={moviesPage}
				pages={moviesData?.pages}
				changePage={setMoviesPage}
				loading={moviesPending}
			/>
			<Movies
				data={series}
				title={`Сериалы ${new Date().getFullYear()}`}
				page={seriesPage}
				pages={seriesData?.pages}
				changePage={setSeriesPage}
				loading={seriesPending}
			/>
			<Movies
				data={animes}
				title={`Аниме ${new Date().getFullYear()}`}
				page={animesPage}
				pages={animesData?.pages}
				changePage={setAnimesPage}
				loading={animesPending}
			/>
		</>
	)
}
