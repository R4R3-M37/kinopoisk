import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Link } from 'atomic-router-react'
import React, { useState } from 'react'

import { RootMovieData } from '~/shared/api/types/Movie'
import { useHorizontalScroll } from '~/shared/hooks/useHorizontalScroll'
import { movieRoute, personRoute } from '~/shared/routes'
import { ButtonLeftArrow, ButtonRightArrow } from '~/shared/ui/carousel/ui/CarouselButtons'

interface Props {
	data: RootMovieData[] | any[]
	isPersonPage?: boolean
}

export const Carousel: React.FC<Props> = ({ data, isPersonPage }) => {
	const [sliceArrayFirst, setSliceArrayFirst] = useState<number>(0)
	const [sliceArraySecond, setSliceArraySecond] = useState<number>(5)
	const route = isPersonPage ? personRoute : movieRoute
	const scrollRef = useHorizontalScroll()

	const handlePrevSlice = () => {
		if (sliceArrayFirst > 0 && sliceArraySecond > 5) {
			setSliceArrayFirst(sliceArrayFirst - 5)
			setSliceArraySecond(sliceArraySecond - 5)
		}
	}

	const handleNextSlice = () => {
		if (sliceArrayFirst < data.length - 5 && sliceArraySecond < data.length) {
			setSliceArrayFirst(sliceArrayFirst + 5)
			setSliceArraySecond(sliceArraySecond + 5)
		}
	}

	return (
		<>
			<Stack direction="row" spacing={2} className="py-6">
				{sliceArrayFirst > 0 && <ButtonLeftArrow handlePrevSlice={handlePrevSlice} />}
				{sliceArraySecond < data.length && <ButtonRightArrow handleNextSlice={handleNextSlice} />}
			</Stack>
			<div className="flex overflow-auto">
				<div className="flex overflow-auto" ref={scrollRef}>
					{data &&
						data.slice(sliceArrayFirst, sliceArraySecond).map((item, index) => (
							<div className="mr-3 flex p-2" key={index}>
								<Link to={route} params={{ id: item.id }} className="flex">
									<Card
										sx={{
											width: 200,
											maxWidth: 345,
											height: 'initial',
											position: 'relative'
										}}
										className="border-2 dark:bg-primary">
										{isPersonPage ? (
											<>
												<CardMedia>
													<img
														src={item.photo}
														width={675}
														height={1000}
														loading="lazy"
														alt=""
													/>
												</CardMedia>
												<CardContent>
													<Typography
														fontSize={18}
														color="text.secondary"
														gutterBottom
														className="capitalize dark:text-zinc-400">
														{item.enName || ''}, {item.enProfession || ''}
													</Typography>
													<Typography
														fontSize={18}
														variant="body2"
														color="text.primary"
														className="capitalize dark:text-zinc-300">
														{item.name}
													</Typography>
												</CardContent>
											</>
										) : (
											<>
												<CardMedia>
													<img
														src={item?.poster?.url}
														width={675}
														height={1000}
														loading="lazy"
														alt=""
													/>
												</CardMedia>
												<CardContent>
													{!isPersonPage && (
														<Typography
															fontSize={18}
															color="text.secondary"
															gutterBottom
															className="capitalize dark:text-zinc-400">
															{item.enName || ''}
														</Typography>
													)}
													<Typography
														fontSize={18}
														variant="body2"
														color="text.primary"
														className="capitalize dark:text-zinc-300">
														{item.name || item.alternativeName || ''}
													</Typography>
												</CardContent>
											</>
										)}
									</Card>
								</Link>
							</div>
						))}
				</div>
			</div>
		</>
	)
}
