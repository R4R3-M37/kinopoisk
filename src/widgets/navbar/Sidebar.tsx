import { Link, useRouter } from 'atomic-router-react'
import { useStore } from 'effector-react'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { sidebar } from '~/widgets/navbar/model'

import { history, homeRoute, sidebarRoutes } from '~/shared/routes'
import { RiMovie2Line } from '~/shared/ui/icons'

export const Sidebar = () => {
	const { t } = useTranslation()
	const route = useRouter()
	const path = useStore(route.$path)
	const active = useStore(sidebar.$active)

	const handleSidebarClick = () => {
		sidebar.updated(!active)
	}

	useEffect(() => {
		history.listen(() => {
			sidebar.updated(false)
		})
	}, [])

	return (
		<>
			<aside
				className={
					active
						? 'peer fixed top-0 z-30 flex h-screen w-[256px] translate-x-0 flex-col items-center overflow-hidden bg-gray-100 text-[#b2b2b2] transition-transform dark:bg-primary-bg-dark dark:text-secondary-dark lg:sticky lg:h-auto lg:translate-x-0'
						: 'fixed top-0 z-30 flex h-screen w-[256px] -translate-x-full flex-col items-center overflow-hidden bg-gray-100 text-[#b2b2b2] transition-transform target:translate-x-0  dark:bg-primary-bg-dark dark:text-secondary-dark lg:sticky lg:h-auto lg:translate-x-0'
				}
			>
				<nav>
					<Link to={homeRoute} className="mb-5 mt-6 flex items-center px-6">
						<RiMovie2Line className="text-3xl text-black dark:text-secondary-dark" />
						<span className="self-center whitespace-nowrap text-xl font-semibold capitalize text-primary dark:text-secondary-dark">
							{t('Kinopoisk')}
						</span>
					</Link>
					<ul className="space-y-2">
						<li>
							{sidebarRoutes.map((link) => (
								<Link
									to={link.route}
									className="my-2 flex items-center rounded-lg p-2 px-6 text-base font-normal text-primary hover:bg-gray-100 dark:text-secondary-dark dark:hover:bg-secondary-bg-dark"
									activeClassName="border-2"
									key={link.path}
								>
									{link.path === path ? link.iconOpen : link.icon}
									<span className="ml-3 flex-1 whitespace-nowrap text-lg text-primary dark:text-secondary-dark">
										{t(link.title)}
									</span>
								</Link>
							))}
						</li>
					</ul>
				</nav>
			</aside>
			<div
				onClick={handleSidebarClick}
				className={
					active
						? 'pointer-events-none pointer-events-auto fixed inset-0 z-20 cursor-default bg-black opacity-50 transition-opacity lg:hidden'
						: 'pointer-events-none fixed inset-0 z-20 cursor-default bg-black opacity-0 transition-opacity peer-target:pointer-events-auto peer-target:opacity-50 lg:hidden'
				}
			/>
		</>
	)
}
