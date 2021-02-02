import * as React from "react";

import { HomeOutlined } from "@material-ui/icons";
import useLocation from "utils/hooks/useLocation";

import "styled-components/macro";

export const topLevelPathNames = {
  HOME: "/",
};

export const PathsGroup = {
  Overview: { icon: HomeOutlined, wildcardPathName: "/" },
};

export interface IAllRoutes {
  id: keyof typeof topLevelPathNames | string;
  relativeUrl: string;
  label?: string;
  url: string;
  fromGroup?: keyof typeof PathsGroup;
  searchWords?: string[];
  isTopLevel?: boolean;
  disabled?: boolean;
  notListed?: boolean;
  order?: number;
  customRender?: boolean;
  hidden?: boolean;
  badgeCountKey?: string; // TODO: Replace string with Stats["packages"] | Stats["runsheets"] to avoid mistakes
}

export interface IMenuRoutes {
  [key: string]: IAllRoutes[];
}

export let ROLE_ROUTES: IMenuRoutes = {};

export const AllRoutes: IAllRoutes[] = [
  {
    id: "HOME",
    url: "/",
    relativeUrl: "/",
    label: "Home",
    order: -5,
    searchWords: ["home", "accueil", "landing"],
    fromGroup: "Overview",
    isTopLevel: true,
  },
];

export function useCurrentRoute() {
  const { location } = useLocation();

  let currentRoute = React.useMemo(() => {
    let route = AllRoutes.find((route) => route.url === location.pathname);

    if (!route || typeof route === "undefined") {
      route = AllRoutes.filter((route) => route.id !== "HOME").find(
        (route) =>
          route.url === location.state?.fromGroup ||
          location.pathname.startsWith(route.url)
      );
    }
    return route;
  }, [location.pathname, location.state]);

  return { currentRoute };
}
