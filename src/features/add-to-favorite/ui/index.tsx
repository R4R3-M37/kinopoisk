import { Button } from '@mui/material'
import { useStore } from 'effector-react'
import React from 'react'
import { BsFillBookmarkCheckFill, BsFillBookmarkPlusFill } from 'react-icons/bs'

import { $favorites, addedToFavorite, removedFromFavorite } from '~/features/add-to-favorite/model'

interface Props {
	id: string
	t?: (key: string) => string
}

export const FavoriteButton: React.FC<Props> = ({ id, t }) => {
	const favorites = useStore($favorites)

	const handleAddToFavorite = () => {
		if (favorites.includes(id)) {
			removedFromFavorite(id)
		} else {
			addedToFavorite(id)
		}
	}

	return (
		<Button
			variant="outlined"
			size="large"
			onClick={handleAddToFavorite}
			className="mt-2 border-2 bg-white sm:mx-3 sm:mt-0">
			{favorites.includes(id) ? (
				<>
					<BsFillBookmarkCheckFill />
					{t && t('Already in')}
				</>
			) : (
				<>
					<BsFillBookmarkPlusFill />
					{t && t('Watch later')}
				</>
			)}
		</Button>
	)
}
