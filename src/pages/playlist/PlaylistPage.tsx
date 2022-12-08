import { useRouter } from 'atomic-router-react'
import { useStore } from 'effector-react'
import React, { useEffect } from 'react'

export const PlaylistPage = () => {
	const path = useStore(useRouter().$path)

	if (!path.includes('playlist')) {
		return null
	}

	useEffect(() => {
		const script = document.createElement('script')
		script.src = '//yohoho.cc/yo.js'
		document.body.appendChild(script)

		const ad = document.getElementById('mbnr4web')

		if (path.includes('playlist') && ad) {
			document.removeChild(ad)
		}
	}, [])

	return <div id="yohoho" data-resize="1" data-fast="1" data-kinopoisk={path.replace(/\/[aA-zZ]+\//gm, '')} />
}
