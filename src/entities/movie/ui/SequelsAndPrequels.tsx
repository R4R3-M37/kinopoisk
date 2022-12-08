import React from 'react'

import { RootMovieData } from '~/shared/api/types/Movie'
import { Carousel } from '~/shared/ui/carousel/Carousel'

export const SequelsAndPrequels: React.FC<{ data: RootMovieData }> = ({ data }) => {
	const filteredDataSeqAndPreq = data.sequelsAndPrequels.filter(
		(item) => item.name !== undefined || item.enName !== undefined || item.alternativeName !== undefined
	)
	return (
		<>
			{filteredDataSeqAndPreq.length > 0 && (
				<div className="p-6">
					<div className="flex items-center text-3xl font-bold dark:text-zinc-300">Сиквелы и приквелы</div>
					<Carousel data={filteredDataSeqAndPreq} />
				</div>
			)}
		</>
	)
}
