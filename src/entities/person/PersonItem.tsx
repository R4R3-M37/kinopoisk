import { TabContext, TabPanel } from '@mui/lab'
import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

import { PersonDescription } from '~/entities/person/ui/PersonDescription'

import NO_POSTER from '~/shared/img/no-poster.png'
import { Carousel } from '~/shared/ui/carousel/Carousel'
import { FactsAboutMovie } from '~/shared/ui/FactsAboutMovie'
import { TitleGoBack } from '~/shared/ui/TitleGoBack'

interface Props {
	t: (key: string) => string
	data: any
	children: React.ReactNode
}

export const PersonItem: React.FC<Props> = ({ t, data, children }) => {
	const [activeTab, setActiveTab] = useState<string>('1')
	const carouselData = data.movies.filter((movie: any) => !!movie.name)

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
							src={data?.photo || NO_POSTER}
							alt=""
						/>
					</div>
					<div className="w-full">
						{children}
						<PersonDescription t={t} data={data} />
					</div>
				</div>
				<TabContext value={activeTab}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={activeTab} onChange={handleChangeTab} variant="scrollable" aria-label="react tabs">
							<Tab label={t('Movies')} value="1" className="dark:text-zinc-300" />
							{!!data.facts.length && <Tab label={t('Facts')} value="2" className="dark:text-zinc-300" />}
						</Tabs>
					</Box>
					<TabPanel value="1">
						<div className="flex items-center py-6 text-3xl font-bold dark:text-zinc-300">
							{data.movies.length ? t('Movies') : t('Not found')}
						</div>
						<Carousel data={carouselData} isPersonPage={true} />
					</TabPanel>
					{!!data.facts.length && (
						<TabPanel value="2">
							<FactsAboutMovie data={data} />
						</TabPanel>
					)}
				</TabContext>
			</div>
		</section>
	)
}
