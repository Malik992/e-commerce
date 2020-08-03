import * as React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { PrivateRoute } from "config/privateRoutes";
import { topLevelPathNames } from "constants/routes";

import { Suspense } from "react";

const HomePage = React.lazy(() => import("pages/Home"));

const NotFound: React.FC<RouteComponentProps> = () => <p>Sorry, nothing here</p>;

export const AllRoutes = () => {
  const [allowedRoutes, setAllowedRoutes] = React.useState([]);

  const PrivateRoutes = (
    <Router>
      <PrivateRoute as={HomePage} path={topLevelPathNames.HOME} />

      <PrivateRoute as={NotFound} default path="*" />
    </Router>
  );

  return <Suspense fallback={"loading"}>{PrivateRoutes}</Suspense>;
};

export default AllRoutes;
