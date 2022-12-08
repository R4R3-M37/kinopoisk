import React from 'react'

import { RootMovieData } from '~/shared/api/types/Movie'

interface Props {
	t: (key: string) => string
	data: RootMovieData
}

interface DescriptionItems {
	field: string
	value: string | number | React.ReactElement | React.ReactElement[]
}

export const MovieDescription: React.FC<Props> = ({ data, t }) => {
	const { countries, genres, slogan, ageRating, budget, movieLength, fees } = data

	const countries_ = countries.map(({ name }) => name).join(', ')
	const genres_ = genres.map(({ name }) => name).join(', ')

	const slogan_ = slogan ? slogan : '--'
	const ageRating_: React.ReactElement = (
		<span className="border-2 dark:border-zinc-400">{ageRating ? `${ageRating}+` : '--'}</span>
	)

	const budgetCurrency_ = budget?.currency ? budget.currency : ''
	const budgetValue_ = budget?.value ? budget.value : '--'

	const movieLength_ = movieLength ? `${movieLength} мин` : '--'

	const feesUsaCurrency_ = fees?.usa?.currency ? fees.usa.currency : ''
	const feesUsaValue_ = fees?.usa?.value ? fees.usa.value : '--'

	const feesWorldCurrency_ = fees?.world?.currency ? fees.world.currency : ''
	const feesWorldValue_ = fees?.world?.value ? fees.world.value : '--'

	const descriptionItems: DescriptionItems[] = [
		{ field: t('Countries'), value: countries_ || '--' },
		{ field: t('Genre'), value: genres_ || '--' },
		{ field: t('Slogan'), value: slogan_ },
		{ field: t('Age rating'), value: ageRating_ },
		{ field: t('Budget'), value: `${budgetCurrency_}${budgetValue_}` },
		{ field: t('Movie length'), value: movieLength_ },
		{ field: t('Fees USA'), value: `${feesUsaCurrency_}${feesUsaValue_}` },
		{ field: t('Fees world'), value: `${feesWorldCurrency_}${feesWorldValue_}` }
	]

	return (
		<>
			<h2 className="mb-5 text-3xl font-bold dark:text-zinc-300">{t('About')}</h2>
			<ul className="container">
				{descriptionItems.map((item) => (
					<div className="p-2" key={item.field}>
						<li className="flex items-center">
							<span
								className="block text-gray-500 dark:text-zinc-300 md:text-2xl"
								style={{ flex: '0 0 200px' }}
							>
								{item.field}
							</span>
							<span className="relative text-gray-800 dark:text-zinc-400 md:text-2xl">{item.value}</span>
						</li>
					</div>
				))}
			</ul>
		</>
	)
}
