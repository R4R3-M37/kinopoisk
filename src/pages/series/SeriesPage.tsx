import { useQuery } from '@farfetched/react'
import React, { useEffect, useState } from 'react'

import { Movies } from '~/widgets/movies/Movies'

import { seriesQuery } from '~/shared/api'
import { Movie } from '~/shared/api/types'

export const SeriesPage = () => {
	const [series, setSeries] = useState<Movie[]>([])
	const [page, setPage] = useState<number>(1)
	const { data, pending } = useQuery(seriesQuery)

	useEffect(() => {
		if (data) {
			setSeries([...series, ...data.docs])
		}
	}, [data])

	useEffect(() => {
		seriesQuery.start({ page })
	}, [page])

	useEffect(() => {
		setSeries([])
	}, [])

	return (
		<Movies
			data={series}
			title={`Сериалы ${new Date().getFullYear()}`}
			page={page}
			pages={data?.pages}
			changePage={setPage}
			loading={pending}
		/>
	)
}
