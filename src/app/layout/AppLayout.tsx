import React from 'react'

import { Header } from '~/widgets/navbar/Header'
import { Sidebar } from '~/widgets/navbar/Sidebar'

interface LayoutProps {
	children: React.ReactNode
}

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-grow overflow-auto">
			<Sidebar />
			<div className="h-screen flex-1 overflow-auto dark:bg-secondary">
				<Header />
				{children}
			</div>
		</div>
	)
}
