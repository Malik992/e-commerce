import styled from "styled-components/macro";
import { Menu } from "@material-ui/core";

export const colors = {
  dark: "#252C59",
  blue: "#1976D2",
  blueLight: "#85B5E4",
  textPrimary: "#333333",
  textSecondary: "#4B4D52",
  gray: "#E0E0E0",
  grayLighter: "#F2F2F2",
};
export const CustomHeaderMenu = styled(Menu)`
  margin-top: 4rem;
`;
export const HeaderNavStyled = styled("header")`
  position: relative;
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
`;

export const HeaderContainer = styled("div")`
  color: ${colors.dark};
  background-color: "#fff";
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.6rem 1.8rem;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavLogo = styled("img")`
  color: inherit;
  height: 40px;
`;

export const HeaderNavBreadCrumb = styled("ul")`
  display: flex;
  align-items: center;
  margin-left: 1.4rem;
  font-size: 1.2rem;
  list-style-type: none;

  li {
    letter-spacing: 1px;
    font-weight: 100;

    a {
      color: inherit;
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    }
  }
`;

export const HeaderNavRight = styled("nav")`
  margin-left: auto;
`;
