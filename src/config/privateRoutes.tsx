import React from "react";
import { RouteComponentProps, Redirect } from "@reach/router";

interface PrivateRouteProps extends RouteComponentProps {
  as: React.FC<any>;
  path: string;
  children?: React.ReactNode;
}

export function PrivateRoute(props: PrivateRouteProps) {
  let { as: Component, ...rest } = props;

  return <Component {...rest} />;
}
