import { Grid } from '@mui/material'
import React from 'react'

import { MoviesLoader } from '~/widgets/movies/MoviesLoader'

import { MoviesItem } from '~/entities/movie/MoviesItem'

import { Movie } from '~/shared/api/types'
import { NextPageButton } from '~/shared/ui/NextPageButton'
import { SectionLabel } from '~/shared/ui/SectionLabel'

interface Props {
	data: Movie[]
	title: string
	page: number
	pages: number
	changePage: (page: number) => void
	loading: boolean
}

export const Movies: React.FC<Props> = ({ data, title, page, pages, changePage, loading }) => {
	if (data.length === 0) {
		return <MoviesLoader />
	}

	return (
		<section className="container mx-auto flex flex-wrap items-center p-4 pb-6 dark:bg-secondary">
			<div className="container mx-auto flex flex-wrap items-center p-4 pb-6">
				<SectionLabel title={title} />
				<Grid container spacing={{ xs: 2, sm: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12, lg: 16, xl: 20 }}>
					{data.map((movie) => (
						<Grid
							kinopoisk-id={movie.id}
							kinopoisk-name={movie.name}
							item
							xs={2}
							sm={4}
							md={4}
							key={movie.id}>
							<MoviesItem movie={movie} />
						</Grid>
					))}
				</Grid>
				{page < pages && <NextPageButton page={page} changePage={changePage} loading={loading} />}
			</div>
		</section>
	)
}
