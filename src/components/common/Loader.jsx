import React from "react";
import {
  Box,
  Container,
  CircularProgress,
} from "@mui/material";

const Loader = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        m={20}
      >
        <CircularProgress size={100} />
      </Box>
    </Container>
  );
};

export default React.memo(Loader);