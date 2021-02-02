import * as React from "react";
import { Router } from "@reach/router";
import { MotherOfProviders } from "container";

const HomePage = React.lazy(() => import("pages/Home"));
const LoginPage = React.lazy(() => import("pages/Auth/login"));
const LogoutPage = React.lazy(() => import("pages/Auth/logout"));

const LoadingMessage = () => "I'm loading...";
export const AllRoutes = () => {
  return (
    <MotherOfProviders>
      <React.Suspense fallback={LoadingMessage}>
        <Router>
          <React.Fragment>
            <HomePage path="/" />
            <LoginPage path="/login" />
            <LogoutPage path="/logout" />
          </React.Fragment>
        </Router>
      </React.Suspense>
    </MotherOfProviders>
  );
};

export default AllRoutes;
