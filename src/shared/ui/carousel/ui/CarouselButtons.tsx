import { Button } from '@mui/material'
import React from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from '~/shared/ui/icons'

interface Props {
	handleNextSlice?: () => void
	handlePrevSlice?: () => void
}

export const ButtonRightArrow: React.FC<Props> = ({ handleNextSlice }) => {
	return (
		<Button onClick={handleNextSlice} className="rounded-3xl bg-primary dark:bg-zinc-300">
			<AiOutlineArrowRight className="text-zinc-300 dark:text-primary" />
		</Button>
	)
}

export const ButtonLeftArrow: React.FC<Props> = ({ handlePrevSlice }) => {
	return (
		<Button onClick={handlePrevSlice} className="rounded-3xl bg-primary dark:bg-zinc-300">
			<AiOutlineArrowLeft className="text-zinc-300 dark:text-primary" />
		</Button>
	)
}
