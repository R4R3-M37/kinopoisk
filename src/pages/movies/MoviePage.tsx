import { useQuery } from '@farfetched/react'
import { useRouter } from 'atomic-router-react'
import { useStore } from 'effector-react'
import i18next from 'i18next'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { MovieHeader } from '~/widgets/movies/ui/MovieHeader'

import { MovieItem } from '~/entities/movie/MovieItem'

import { movieByIdQuery } from '~/shared/api'

export const MoviePage = () => {
	const { t } = useTranslation()
	const id = useStore(useRouter().$path).replace(/^\/[^/]+\//, '')
	const { data, pending } = useQuery(movieByIdQuery)
	//
	const isEnglish = i18next.language === 'en'
	const title = isEnglish ? data?.enName || data?.alternativeName : data?.name || t('Not found')
	const altTitle = isEnglish ? data?.name : data?.enName || data?.alternativeName
	const rating = data?.rating?.imdb || data?.rating?.kp

	useEffect(() => {
		movieByIdQuery.start({ id })
	}, [id])

	if (pending || !data) {
		return null
	}

	return (
		<MovieItem data={data} t={t}>
			<MovieHeader t={t} title={title} altTitle={altTitle} id={data.id} rating={rating.toFixed(1)} />
		</MovieItem>
	)
}
