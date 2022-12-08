import { useRouter } from 'atomic-router-react'
import { useStore } from 'effector-react'
import React, { useEffect } from 'react'

const DOCUMENT_TITLE: { [key: string]: string } = {
	movies: 'Кинопоиск | Фильмы',
	series: 'Кинопоиск | Сериалы',
	anime: 'Кинопоиск | Аниме',
	search: 'Кинопоиск | Поиск',
	persons: 'Кинопоиск | Актеры',
	favorites: 'Кинопоиск | Избранное',
	playlist: 'Кинопоиск | Плейлист'
}

export const AppTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const path = useStore(useRouter().$path).replace(/[^aA-zZ]/gi, '')
	const routes = useStore(useRouter().$activeRoutes)

	useEffect(() => {
		if (!routes) {
			document.title = 'Кинопоиск | Загрузка'
		} else {
			document.title = DOCUMENT_TITLE[path] || 'Кинопоиск | Главная'
		}
	}, [path])

	return <>{children}</>
}
