import { useStore } from 'effector-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { $isOpen, handleSetLang, updated } from '~/features/change-language/model'

import { IoLanguageOutline } from '~/shared/ui/icons'

export const ChangeLanguage = () => {
	const isOpen = useStore($isOpen)
	const { t } = useTranslation()

	const handleTooltip = () => {
		updated(!isOpen)
	}

	const handleSetRussianLang = () => {
		handleSetLang('ru')
		updated(false)
	}

	const handleSetEnglishLang = () => {
		handleSetLang('en')
		updated(false)
	}

	return (
		<div>
			<button
				onClick={handleTooltip}
				className="mx-auto rounded-lg p-1.5 text-sm text-secondary hover:bg-primary-bg focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-secondary-dark dark:hover:bg-secondary-bg-dark dark:focus:ring-secondary">
				<IoLanguageOutline className="text-4xl" />
			</button>
			{isOpen && (
				<>
					<div className="absolute left-0 top-0 z-50 h-full w-full" onClick={handleTooltip} />
					<ul className="absolute w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-primary-bg-dark dark:text-white">
						<li
							className="w-full rounded-t-lg border-b border-gray-200 py-2 px-4 dark:border-gray-600"
							onClick={handleSetRussianLang}>
							<button>{t('Russian')}</button>
						</li>
						<li className="w-full rounded-b-lg py-2 px-4" onClick={handleSetEnglishLang}>
							<button>{t('English')}</button>
						</li>
					</ul>
				</>
			)}
		</div>
	)
}
