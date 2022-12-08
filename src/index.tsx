import { RouterProvider } from 'atomic-router-react'
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { AppLayout } from '~/app/layout/AppLayout'
import { AppTitle } from '~/app/layout/AppTitle'
import { AppRoutes } from '~/app/routing/AppRoutes'
import { router } from '~/app/routing/routing'

import '~/app/styles/tailwind.css'
import '~/i18n'

const container = document.getElementById('app')
const root = createRoot(container as HTMLElement)

root.render(
	<RouterProvider router={router}>
		<Suspense fallback={''}>
			<AppTitle>
				<AppLayout>
					<AppRoutes />
				</AppLayout>
			</AppTitle>
		</Suspense>
	</RouterProvider>
)
