import { TabContext, TabPanel } from '@mui/lab'
import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

import { MovieDescription } from '~/entities/movie/ui/MovieDescription'
import { SequelsAndPrequels } from '~/entities/movie/ui/SequelsAndPrequels'
import { SimilarMovies } from '~/entities/movie/ui/SimilarMovies'

import { RootMovieData } from '~/shared/api/types/Movie'
import NO_POSTER from '~/shared/img/no-poster.png'
import { Carousel } from '~/shared/ui/carousel/Carousel'
import { FactsAboutMovie } from '~/shared/ui/FactsAboutMovie'
import { TitleGoBack } from '~/shared/ui/TitleGoBack'

interface Props {
	t: (key: string) => string
	data: RootMovieData
	children: React.ReactNode
}

export const MovieItem: React.FC<Props> = ({ data, children, t }) => {
	const [activeTab, setActiveTab] = useState<string>(data.shortDescription || data.description ? '1' : '2')
	const persons = data.persons.filter((person) => person.name !== '')

	const handleChangeTab = (_: React.SyntheticEvent, newValue: string) => {
		setActiveTab(newValue)
	}

	return (
		<section className="bg-white dark:bg-secondary">
			<div className="container p-6">
				<TitleGoBack />
				<div className="mb-12 flex flex-col md:flex-row">
					<div className="relative mx-auto w-fit md:mr-12">
						<img
							className="relative h-auto overflow-hidden rounded object-cover"
							style={{ aspectRatio: '2/3' }}
							width="450"
							height="800"
							src={data?.poster?.url || NO_POSTER}
							alt=""
						/>
					</div>
					<div className="w-full">
						{children}
						<MovieDescription data={data} t={t} />
					</div>
				</div>
				<TabContext value={activeTab}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={activeTab} onChange={handleChangeTab} variant="scrollable" aria-label="react tabs">
							{(data.shortDescription || data.description) && (
								<Tab label={t('Description')} value="1" className="dark:text-zinc-300" />
							)}
							<Tab label={t('Trailers')} value="2" className="dark:text-zinc-300" />
							<Tab label={t('Actors')} value="3" className="dark:text-zinc-300" />
							{!!data?.facts?.length && (
								<Tab label={t('Facts')} value="4" className="dark:text-zinc-300" />
							)}
						</Tabs>
					</Box>
					<TabPanel value="1">
						{data.shortDescription && (
							<>
								<h2 className="mb-5 text-3xl font-bold dark:text-zinc-300">{t('Short description')}</h2>
								<div className="text-2xl dark:text-zinc-300 md:w-4/5">
									{`${data.shortDescription}...`}
								</div>
								<div className="py-6" />
							</>
						)}
						{data.description && (
							<>
								<h2 className="mb-5 text-3xl font-bold dark:text-zinc-300">{t('Description')}</h2>
								<div className="text-2xl dark:text-zinc-300 md:w-4/5">{data.description}</div>
							</>
						)}
					</TabPanel>
					<TabPanel value="2">
						<div className="py-3">
							<h2 className="mb-5 text-3xl font-bold dark:text-zinc-300">{t('Trailers')}</h2>
							<div className="text-2xl dark:text-zinc-300">youtube.com</div>
						</div>
					</TabPanel>
					<TabPanel value="3">
						<h2 className="mb-5 text-3xl font-bold dark:text-zinc-300">{t('Actors')}</h2>
						<Carousel data={persons} isPersonPage={true} />
					</TabPanel>
					{!!data?.facts?.length && (
						<TabPanel value="4">
							<FactsAboutMovie data={data} />
						</TabPanel>
					)}
					<SequelsAndPrequels data={data} />
					<SimilarMovies data={data} t={t} />
				</TabContext>
			</div>
		</section>
	)
}
