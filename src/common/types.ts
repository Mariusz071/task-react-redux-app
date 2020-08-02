import { ReactNode } from 'react'

interface RouteElement {
    path: string
    component: ReactNode
    exact?: boolean
}

export declare type RoutingConfig = RouteElement[]