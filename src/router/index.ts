import React from "react";
import Home from "../components/Main/Home/Home";
import Roadmap from "../components/Main/Home/Roadmap/Roadmap";
import Card from "../components/Main/Court/Card";
import CourtList from "../components/Main/Court/CourtList";
import Flat from "../components/Main/Flat/Flat";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const MainRoutes: IRoute[] = [
    {path: "/", exact: true, component: Home},
    {path: "*", exact: true, component: Home},
    {path: "/CourtList", exact: true, component: CourtList},
    {path: "/RoadMap", exact: true, component: Roadmap},
    {path: "/CourtList/:name", exact: true, component: Card},
    {path: "/Flat", exact: true, component: Flat},
]