import { useQuery } from '@farfetched/react'
import { useStore } from 'effector-react'
import React, { useEffect, useState } from 'react'

import { Movies } from '~/widgets/movies/Movies'

import { $favorites } from '~/features/add-to-favorite/model'

import { favoritesQuery } from '~/shared/api'
import { Movie } from '~/shared/api/types'

export const FavoritesPage = () => {
	const [favorites, setFavorites] = useState<Movie[]>([])
	const [page, setPage] = useState<number>(1)
	const { data, pending } = useQuery(favoritesQuery)
	const ids = useStore($favorites)

	useEffect(() => {
		if (data) {
			setFavorites([...favorites, ...data.docs])
		}
	}, [data])

	useEffect(() => {
		favoritesQuery.start({ page, ids })
	}, [page])

	useEffect(() => {
		setFavorites([])
	}, [])

	return (
		<Movies
			data={favorites}
			title="Избранное"
			page={page}
			pages={data?.pages}
			changePage={setPage}
			loading={pending}
		/>
	)
}
