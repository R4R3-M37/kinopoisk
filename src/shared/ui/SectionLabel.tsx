import React from 'react'

export const SectionLabel: React.FC<{ title: string }> = ({ title }) => {
	return (
		<nav className="top-0 w-full px-6 py-1">
			<div className="mb-5 text-xl font-bold uppercase tracking-wide text-gray-800 no-underline hover:no-underline">
				<div className="text-center dark:text-zinc-300 xs:text-left">{title}</div>
			</div>
		</nav>
	)
}
