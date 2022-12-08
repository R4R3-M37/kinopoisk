import { useQuery } from '@farfetched/react'
import React, { useEffect, useState } from 'react'

import { Movies } from '~/widgets/movies/Movies'

import { moviesQuery } from '~/shared/api'
import { Movie } from '~/shared/api/types'

export const MoviesPage = () => {
	const [movies, setMovies] = useState<Movie[]>([])
	const [moviesPage, setMoviesPage] = useState<number>(1)
	const { data, pending } = useQuery(moviesQuery)

	useEffect(() => {
		if (data) {
			setMovies([...movies, ...data.docs])
		}
	}, [data])

	useEffect(() => {
		moviesQuery.start({ page: moviesPage })
	}, [moviesPage])

	useEffect(() => {
		setMovies([])
	}, [])

	return (
		<Movies
			data={movies}
			title={`Фильмы ${new Date().getFullYear()}`}
			page={moviesPage}
			pages={data?.pages}
			changePage={setMoviesPage}
			loading={pending}
		/>
	)
}
