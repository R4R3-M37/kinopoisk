import { Link } from 'atomic-router-react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { history, movieRoute } from '~/shared/routes'
import { BiSearchAlt } from '~/shared/ui/icons'

export const SearchNavbar = () => {
	const { t } = useTranslation()
	const [searchInput, setSearchInput] = useState<string>('')

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value) {
			setSearchInput(e.target.value)
		} else {
			setSearchInput('')
		}
	}

	useEffect(() => {
		history.listen(() => {
			setSearchInput('')
		})
	}, [])

	return (
		<div className="relative text-secondary">
			<input
				value={searchInput}
				onChange={handleSearchInput}
				type="text"
				placeholder={t('Search') || 'Поиск'}
				className="h-10 w-[9.5rem] rounded-full bg-white px-5 pr-10 text-sm focus:outline-none dark:bg-secondary dark:text-zinc-200 md:h-12 md:w-72"
			/>
			<Link to={movieRoute} params={{ id: searchInput + ' ' }}>
				<button type="submit" className="absolute right-0 top-0 mt-2 mr-4 md:mt-3">
					<BiSearchAlt className="text-2xl text-primary dark:text-primary-dark" />
				</button>
			</Link>
		</div>
	)
}
