import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link,
  Tooltip,
  Avatar,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { signout } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SignInButton from "./SignInButton";
import { BACKGROUND_COLOR } from "../../constants/data";

const user = JSON.parse(localStorage.getItem("profile"));

const pages = ["Home", "Categories"];
const pagesRoute = ["home", "categories", "contact"];

//const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = ["Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavMenu = (page) => {
    //this is to solve the menu icon close bug, since close outside of
    //a button will get error 404
    if (typeof page === "string" || page instanceof String)
      navigate(`/${page}`);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    const setting = event.currentTarget.id;
    if (setting === "Logout") {
      dispatch(signout());
    }
    setAnchorElUser(null);
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = "#FF7B00";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "#ffffff";
  };

  return (
    <AppBar
      position="static"
      sx={{
        // #001529, #E2E2E2
        background: BACKGROUND_COLOR,
        "@media (max-width: 1048px)": {
          width: "1048px",
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <img src="One-Garlic-logos_white.png" width="100" />
          </a>
          <Typography
            variant="h6"
            noWrap
            component="a"
            marginLeft="20px"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "inherit",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PicelAds
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page}
                  component={Link}
                  onClick={() => handleNavMenu(pagesRoute[index])}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,

              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleNavMenu(pagesRoute[index])}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "inherit",
                }}
              >
                {page}
              </Button>
            ))}
            {!user && <SignInButton />}
          </Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    id={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
