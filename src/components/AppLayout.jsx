import React from "react";
import { Box } from "@mui/material";
import Header from "./common/Header";

const AppLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Header />
      <Box flexGrow={1}>
        {children}
      </Box>
    </Box>
  );
};

export default React.memo(AppLayout);