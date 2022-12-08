import { Button } from '@mui/material'
import { Link } from 'atomic-router-react'
import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

import { FavoriteButton } from '~/features/add-to-favorite/ui'

import { playlistRoute } from '~/shared/routes'

interface Props {
	t?: (key: string) => string
	isPersonPage?: boolean
	title: string
	altTitle: string
	id: string
	year?: number
	rating?: number
}

export const MovieHeader: React.FC<Props> = ({ t, isPersonPage, title, altTitle, id, year, rating }) => {
	return (
		<>
			<div className="py-4 text-center text-4xl font-bold text-gray-800 dark:text-zinc-300 md:py-0 md:text-left">
				{title}
				{!!rating && (
					<div className="mt-4 ml-4 inline rounded border border-green-600 bg-green-600 text-white dark:text-zinc-300">
						{rating}
					</div>
				)}
			</div>
			<div className="mb-4 text-center text-2xl font-extralight text-gray-800 dark:text-zinc-200 md:text-left">
				{altTitle} {year && <span>({year})</span>}
			</div>
			{!isPersonPage && (
				<div className="mb-10 flex flex-col items-center items-center justify-center sm:flex-row lg:justify-start">
					<Link to={playlistRoute} params={{ id }}>
						<Button variant="outlined" size="large" className="mt-2 border-2 bg-white sm:mx-3 sm:mt-0">
							<BsPlayFill />
							{t && t('Watch')}
						</Button>
					</Link>
					<FavoriteButton id={String(id)} t={t && t} />
				</div>
			)}
		</>
	)
}
