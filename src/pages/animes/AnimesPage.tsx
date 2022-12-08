import { useQuery } from '@farfetched/react'
import React, { useEffect, useState } from 'react'

import { Movies } from '~/widgets/movies/Movies'

import { animesQuery } from '~/shared/api'
import { Movie } from '~/shared/api/types'

export const AnimesPage = () => {
	const [animes, setAnimes] = useState<Movie[]>([])
	const [page, setPage] = useState<number>(1)
	const { data, pending } = useQuery(animesQuery)

	useEffect(() => {
		if (data) {
			setAnimes([...animes, ...data.docs])
		}
	}, [data])

	useEffect(() => {
		animesQuery.start({ page })
	}, [page])

	useEffect(() => {
		setAnimes([])
	}, [])

	return (
		<Movies
			data={animes}
			title={`Аниме ${new Date().getFullYear()}`}
			page={page}
			pages={data?.pages}
			changePage={setPage}
			loading={pending}
		/>
	)
}
