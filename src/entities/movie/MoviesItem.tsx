import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'atomic-router-react'
import React from 'react'

import { Movie } from '~/shared/api/types'
import { animeRoute, cartoonRoute, movieRoute, serialRoute } from '~/shared/routes'

const DESCRIPTION_TYPE: { [key: string]: string } = {
	movie: 'Фильм',
	'tv-series': 'Сериал',
	cartoon: 'Мультфильм',
	anime: 'Аниме'
}

const ROUTE_TYPE: { [key: string]: any } = {
	movie: movieRoute,
	'tv-series': serialRoute,
	cartoon: cartoonRoute,
	anime: animeRoute
}

export const MoviesItem: React.FC<{ movie: Movie }> = ({ movie }) => {
	const name = movie.name || movie.enName || movie.alternativeName
	const rating = (movie.rating.kp || movie.rating.imdb).toFixed(1)
	const route = ROUTE_TYPE[movie.type]

	return (
		<Link to={route} params={{ id: String(movie.id) }}>
			<Card
				sx={{
					maxWidth: 345,
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					position: 'relative'
				}}
				className="border-2 transition-all hover:-translate-y-4 dark:bg-primary"
			>
				<CardMedia>
					<img src={movie.poster.url} width={675} height={1000} loading="lazy" alt="" />
				</CardMedia>
				<CardContent>
					<Typography fontSize={18} color="text.secondary" gutterBottom className="dark:text-zinc-400">
						{DESCRIPTION_TYPE[movie.type] || 'Фильм'}, {movie.year}
					</Typography>
					<Typography fontSize={18} variant="body2" color="text.primary" className="dark:text-zinc-300">
						{name}
					</Typography>
				</CardContent>
				<div className="absolute mt-4 ml-4 rounded border border-green-600 bg-green-600 p-2 text-white  dark:text-zinc-300">
					{rating}
				</div>
			</Card>
		</Link>
	)
}
