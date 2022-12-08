import React from 'react'

import { RootMovieData } from '~/shared/api/types/Movie'
import { Carousel } from '~/shared/ui/carousel/Carousel'

interface Props {
	data: RootMovieData
	t: (key: string) => string
}

export const SimilarMovies: React.FC<Props> = ({ data, t }) => {
	return (
		<>
			{!!data.similarMovies.length && (
				<div className="p-6">
					<div className="flex items-center text-3xl font-bold dark:text-zinc-300">{t('Similar films')}</div>
					<Carousel data={data.similarMovies} />
				</div>
			)}
		</>
	)
}
