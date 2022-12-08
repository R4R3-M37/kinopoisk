import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

import NO_POSTER from '~/shared/img/no-poster.png'
import { SectionLabel } from '~/shared/ui/SectionLabel'

export const MoviesLoader = () => {
	return (
		<section className="container mx-auto flex flex-wrap items-center p-4 pb-6 dark:bg-secondary">
			<div className="container mx-auto flex flex-wrap items-center p-4 pb-6">
				<SectionLabel title="Загрузка..." />
				<Grid container spacing={{ xs: 2, sm: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12, lg: 16, xl: 20 }}>
					{new Array(10).fill('movie').map((_, i) => (
						<Grid item xs={2} sm={4} md={4} key={i}>
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
									<img src={NO_POSTER} width={675} height={1000} loading="lazy" alt="" />
								</CardMedia>
								<CardContent>
									<Typography
										fontSize={18}
										color="text.secondary"
										gutterBottom
										className="dark:text-zinc-400"
									>
										Описание, год выхода
									</Typography>
									<Typography
										fontSize={18}
										variant="body2"
										color="text.primary"
										className="dark:text-zinc-300"
									>
										Название
									</Typography>
								</CardContent>
								<div className="absolute mt-4 ml-4 rounded border border-green-600 bg-green-600 p-2 text-white  dark:text-zinc-300">
									?
								</div>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</section>
	)
}
