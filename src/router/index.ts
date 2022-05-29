import React from "react";
import Auth from "../components/Main/Auth/Auth";
import Home from "../components/Main/Home/Home";
import List from "../components/Main/List/List";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const MainRoutes: IRoute[] = [
    {path: "/", exact: true, component: Home},
    {path: "/List", exact: true, component: List},
    {path: "/Auth", exact: true, component: Auth},
]