import { useStore } from 'effector-react'
import React from 'react'

import { sidebar } from '~/widgets/navbar/model'
import { SearchNavbar } from '~/widgets/navbar/ui/SearchNavbar'

import { ChangeLanguage } from '~/features/change-language/ui/ChangeLanguage'
import { DarkMode } from '~/features/dark-mode/ui/DarkMode'

import { FiMenu } from '~/shared/ui/icons'

export const Header = () => {
	const active = useStore(sidebar.$active)
	const handleSidebarClick = () => {
		sidebar.updated(!active)
	}

	return (
		<nav className="top-0 z-30 w-full bg-primary-bg py-1 dark:bg-primary-bg-dark">
			<div className="container mx-auto mt-0 flex w-full flex-nowrap items-center justify-between px-6 py-3">
				<label className="block; dark:text-secondary-dark lg:hidden" onClick={handleSidebarClick}>
					<FiMenu className="text-4xl" />
				</label>
				<input className="hidden" type="checkbox" />
				<div className="order-3 hidden w-full md:order-1 md:flex md:w-auto md:items-center" />
				<div className="md: order-2 flex w-60 items-center space-x-2 md:order-3 md:mr-20 md:justify-end">
					<ChangeLanguage />
					<DarkMode />
					<SearchNavbar />
				</div>
			</div>
		</nav>
	)
}
