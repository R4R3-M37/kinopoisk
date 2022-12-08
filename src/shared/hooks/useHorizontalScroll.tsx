import { useEffect, useRef } from 'react'

export const useHorizontalScroll = () => {
	const elRef = useRef<any>()
	useEffect(() => {
		const element = elRef.current
		if (element) {
			const onWheel = (e: WheelEvent) => {
				e.preventDefault()
				element.scrollTo({
					left: element.scrollLeft + e.deltaY,
					behavior: 'auto'
				})
			}
			element.addEventListener('wheel', onWheel)
			return () => element.removeEventListener('wheel', onWheel)
		}
		return
	}, [])
	return elRef
}
