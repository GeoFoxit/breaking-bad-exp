import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import StyledLink from "./StyledLink";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={1}
    >
      <Toolbar
        sx={{
          p: 3,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "64px"
        }}
      >
        <Typography
          color="primary.main"
          variant="h5"
          align="center"
          fontWeight="bold"
          sx={{ userSelect: "none" }}
        >
            B
          <Typography
            color="white"
            variant="h5"
            align="center"
            component="span"
            fontWeight="inherit"
          >
            reaking
          </Typography>
            B
          <Typography
            color="white"
            variant="h5"
            align="center"
            component="span"
            fontWeight="inherit"
          >
            ad
          </Typography>
            E
          <Typography
            color="white"
            variant="h5"
            align="center"
            component="span"
            fontWeight="inherit"
          >
            xplorer
          </Typography>
        </Typography>
        <Box>
          <StyledLink
            to="/"
          >
            Home
          </StyledLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;