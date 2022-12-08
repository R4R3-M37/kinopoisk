import { createHistoryRouter } from 'atomic-router'

import { customRoutes, history, indexRoutes } from '~/shared/routes'

const routes = [...indexRoutes, ...customRoutes]
export const router = createHistoryRouter({ routes })

router.setHistory(history)
