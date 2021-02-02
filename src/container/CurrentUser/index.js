import React, { createContext, useState } from "react";
import { firebaseConfig } from "config/index";
import { getStoredUser } from "utils";

let InitialState = {
  uid: null,
  email: null,
  role: null,
};

if (window.localStorage.getItem("user")) {
  InitialState = getStoredUser();
}

export const CurrentUserContext = createContext({
  ...InitialState,
  isLoggedIn: false,
  setLoggedIn: (boolean) => {},
  status: { code: null, message: null },
  signIn: async ({ email, password }) => ({ uid: "" }),
  signOut: async () => {},
});

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(InitialState);
  const [status, setStatus] = useState({ code: null, message: null });
  const [isLoggedIn, setLoggedIn] = useState(false);

  async function signIn({ email: emailSubmitted, password }) {
    try {
      const { user } = await firebaseConfig
        .auth()
        .signInWithEmailAndPassword(emailSubmitted, password);
      const { uid, email } = user;
      const userInfos = {
        uid,
        email,
      };

      setUser(userInfos);
      setLoggedIn(true);
      setStatus({ code: "ok", message: "success" });
      window.localStorage.setItem("user", JSON.stringify(userInfos));
      return { uid };
    } catch (error) {
      setStatus({ code: error.code, message: error.message });
      return error;
    }
  }

  async function signOut() {
    try {
      await firebaseConfig.auth().signOut();
      window.localStorage.removeItem("user");

      setUser(InitialState);
      setLoggedIn(false);
      setStatus({ code: null, message: null });
    } catch (error) {
      setStatus(error);
      throw new Error(`Could not signOut the user, ${error}`);
    }
  }

  return (
    <CurrentUserContext.Provider
      value={{
        ...user,
        isLoggedIn,
        setLoggedIn,
        status,
        signIn,
        signOut,
      }}
      children={children}
    />
  );
};
