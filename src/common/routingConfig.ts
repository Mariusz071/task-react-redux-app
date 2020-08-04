import { Search } from 'pages/search'
import { Forecast } from 'pages/forecast'
import { DetailedForecast } from 'pages/detailedForecast'
import { RoutingConfig } from './types'



export const routingConfig: RoutingConfig = [
    {
        path: '/',
        exact: true,
        component: Search
    },
    {
        path: '/:city',
        exact: true,
        component: Forecast,
    },
    {
        path: '/:city/:id',
        exact: true,
        component: DetailedForecast,
    },
]
