import React from "react";
import Home from "../components/Main/Home/Home";
import Roadmap from "../components/Main/Home/Roadmap/Roadmap";
import Card from "../components/Main/List/Card";
import List from "../components/Main/List/List";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const MainRoutes: IRoute[] = [
    {path: "/", exact: true, component: Home},
    {path: "*", exact: true, component: Home},
    {path: "/List", exact: true, component: List},
    {path: "/RoadMap", exact: true, component: Roadmap},
    {path: "/List/:name", exact: true, component: Card},
]