import React from "react";
import { HeaderNav } from "components/Header";
import { Footer } from "components/Footer";

interface ColorProps {
  children?: any;
}

export const Page = ({ children }: ColorProps) => {
  return (
    <React.Fragment>
      <div tabIndex={-1} role="group" id="root" style={{ outline: "none" }}>
        <main>
          <HeaderNav />
          {children}
          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};
export default Page;
