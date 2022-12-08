import { useRouter } from 'atomic-router-react'
import { useStore } from 'effector-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { AiOutlineArrowLeft } from '~/shared/ui/icons'

export const TitleGoBack = () => {
	const { t } = useTranslation()
	const { back } = useStore(useRouter().$history)

	return (
		<div className="flex items-center py-3 text-3xl font-bold">
			<span onClick={back} className="flex cursor-pointer items-center text-white">
				<AiOutlineArrowLeft />
				{t('Back')}
			</span>
		</div>
	)
}
