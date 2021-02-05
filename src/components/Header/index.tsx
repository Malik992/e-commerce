import React, { useContext, useState } from "react";
import { Tooltip, IconButton, MenuItem } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { CustomHeaderMenu } from "./styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import "styled-components/macro";

import Logo from "assets/images/shopping-logo.png";

import {
  HeaderContainer,
  HeaderNavBreadCrumb,
  HeaderNavLogo,
  HeaderNavStyled,
  HeaderNavRight,
} from "./styles";

import "styled-components/macro";
import { CurrentUserContext } from "container/CurrentUser";
import { UserIcon } from "icons";

export const HeaderNav = withRouter((props) => {
  const { location, history } = props;
  let position = "";
  const { email } = useContext(CurrentUserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  function handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  if (location.pathname === "/login") {
    position = "Login";
  } else if (location.pathname === "/") {
    position = "Home";
  } else {
    position = "Home";
  }

  return (
    <HeaderNavStyled>
      <HeaderContainer>
        {location.pathname !== "/" ? (
          <IconButton color="inherit" onClick={() => history.goBack()}>
            <ArrowBack color="inherit" />
          </IconButton>
        ) : (
          <Link to="/">
            <HeaderNavLogo src={Logo} alt="logo" height={40} />
          </Link>
        )}
        <HeaderNavBreadCrumb>
          <li>
            <Link to="/">Diayma Shop</Link>
          </li>
        </HeaderNavBreadCrumb>
        <HeaderNavRight>
          <Tooltip title="Déconnection" placement="bottom">
            <IconButton
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <UserIcon />
            </IconButton>
          </Tooltip>
          <CustomHeaderMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>{email}</MenuItem>
            <MenuItem
              color="inherit"
              component={Link as any}
              {...({ to: "/logout" } as any)}
            >
              Déconnection
            </MenuItem>
          </CustomHeaderMenu>
        </HeaderNavRight>
      </HeaderContainer>
    </HeaderNavStyled>
  );
});
