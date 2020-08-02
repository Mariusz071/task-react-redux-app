import { FC } from "react";

export interface RouteElement {
    path: string
    component: FC
    exact?: boolean
}

export declare type RoutingConfig = RouteElement[]