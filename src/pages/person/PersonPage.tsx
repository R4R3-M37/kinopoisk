import React from 'react'
import { useTranslation } from 'react-i18next'

import { MovieHeader } from '~/widgets/movies/ui/MovieHeader'

import { PersonItem } from '~/entities/person/PersonItem'

export const PersonPage = () => {
	const data: any = {}
	const { t } = useTranslation()

	return (
		<PersonItem data={data} t={t}>
			<MovieHeader
				isPersonPage={true}
				title={data.name || data.enName}
				altTitle={data.enName || ''}
				id={data.id}
			/>
		</PersonItem>
	)
}
