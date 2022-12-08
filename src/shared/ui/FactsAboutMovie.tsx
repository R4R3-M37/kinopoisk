import React from 'react'

import { RootMovieData } from '~/shared/api/types/Movie'

export const FactsAboutMovie: React.FC<{ data: RootMovieData }> = ({ data }) => {
	return (
		<>
			<h2 className="mb-12 text-3xl font-bold dark:text-zinc-300">Знаете ли вы что...</h2>
			<ul className="flex flex-col text-xl md:w-4/5 md:text-2xl">
				{data.facts.map((fact, index) => (
					<li
						className="items mb-4 border-2 border-zinc-500 p-2 dark:text-zinc-300"
						dangerouslySetInnerHTML={{ __html: fact.value }}
						key={index}
					/>
				))}
			</ul>
		</>
	)
}
