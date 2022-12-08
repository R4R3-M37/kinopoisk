import { createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'
import React from 'react'

import * as icon from '~/shared/ui/icons'

interface RoutesDictionary {
	title: { [key: string]: string }
	icon: { [key: string]: JSX.Element }
	iconOpen: { [key: string]: JSX.Element }
}

// Main Routes - Sidebar Routes
export const history = createBrowserHistory()
export const homeRoute = createRoute()
export const moviesRoute = createRoute()
export const seriesRoute = createRoute()
export const animesRoute = createRoute()
export const favoritesRoute = createRoute()
//

// Named Routes
export const personRoute = createRoute<{ id: string }>()
export const movieRoute = createRoute<{ id: string }>()
export const serialRoute = createRoute<{ id: string }>()
export const animeRoute = createRoute<{ id: string }>()
export const cartoonRoute = createRoute<{ id: string }>()
export const playlistRoute = createRoute<{ id: string }>()
//

export const indexRoutes = [
	{
		path: '/',
		route: homeRoute
	},
	{
		path: '/movies',
		route: moviesRoute
	},
	{
		path: '/series',
		route: seriesRoute
	},
	{
		path: '/anime',
		route: animesRoute
	},
	{
		path: '/favorites',
		route: favoritesRoute
	}
]
export const customRoutes = [
	{
		path: '/persons/:id',
		route: personRoute
	},
	{
		path: '/movies/:id',
		route: movieRoute
	},
	{
		path: '/series/:id',
		route: serialRoute
	},
	{
		path: '/anime/:id',
		route: animeRoute
	},
	{
		path: '/cartoons/:id',
		route: cartoonRoute
	},
	{
		path: '/playlist/:id',
		route: playlistRoute
	}
]

const routesDictionary: RoutesDictionary = {
	title: {
		'/': 'Home',
		'/movies': 'Movies',
		'/series': 'Series',
		'/anime': 'Anime',
		'/favorites': 'Favorites'
	},
	icon: {
		'/': <icon.AiOutlineHome className="text-xl" />,
		'/movies': <icon.MdOutlineMovie className="text-xl" />,
		'/series': <icon.RiMovie2Line className="text-xl" />,
		'/anime': <icon.BsSkipForward className="text-xl" />,
		'/favorites': <icon.MdOutlineFavoriteBorder className="text-xl" />
	},
	iconOpen: {
		'/': <icon.AiFillHome className="text-xl" />,
		'/movies': <icon.MdMovie className="text-xl" />,
		'/series': <icon.RiMovie2Fill className="text-xl" />,
		'/anime': <icon.BsSkipForwardFill className="text-xl" />,
		'/favorites': <icon.MdFavorite className="text-xl" />
	}
}

export const sidebarRoutes = indexRoutes.map((mainRoute) => ({
	...mainRoute,
	icon: routesDictionary.icon[mainRoute.path],
	iconOpen: routesDictionary.iconOpen[mainRoute.path],
	title: routesDictionary.title[mainRoute.path]
}))
