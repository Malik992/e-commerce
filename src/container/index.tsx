import React from "react";

import { CurrentUserProvider } from "container/CurrentUser";

export const MotherOfProviders = ({ children }: any) => {
  return <CurrentUserProvider>{children}</CurrentUserProvider>;
};
