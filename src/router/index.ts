import React from "react";
import Auth from "../components/Main/Auth/Auth";
import Home from "../components/Main/Home/Home";
import Roadmap from "../components/Main/Home/Roadmap/Roadmap";
import SecretPage from "../components/Main/Home/SecretPage/SecretPage";
import List from "../components/Main/List/List";
import Train from "../components/Main/Train/Train";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const MainRoutes: IRoute[] = [
    {path: "/", exact: true, component: Home},
    {path: "/List", exact: true, component: List},
    {path: "/Auth", exact: true, component: Auth},
    {path: "/Train", exact: true, component: Train},
    {path: "/RoadMap", exact: true, component: Roadmap},
    {path: "/Secret", exact: true, component: SecretPage},
]