import { useStore } from 'effector-react'
import React from 'react'

import { $theme, update } from '~/features/dark-mode/model'

import { BsFillMoonStarsFill, BsFillSunFill } from '~/shared/ui/icons'

export const DarkMode = () => {
	const theme = useStore($theme)

	const handleChangeTheme = () => {
		update(theme === 'dark' ? 'white' : 'dark')
	}

	return (
		<button
			onClick={handleChangeTheme}
			className="mx-auto rounded-lg p-1.5 text-sm text-secondary hover:bg-primary-bg focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-secondary-dark dark:hover:bg-secondary-bg-dark dark:focus:ring-secondary">
			{theme === 'dark' ? <BsFillSunFill className="text-2xl" /> : <BsFillMoonStarsFill className="text-2xl" />}
		</button>
	)
}
