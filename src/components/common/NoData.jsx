import { Box, Typography } from "@mui/material";
import React from "react";

const NoData = () => {
  return (
    <Box
      width="100%"
      my={12}
    >
      <Typography
        align="center"
        variant="h6"
      >
        Sorry, no data available
      </Typography>
    </Box>
  );
};

export default React.memo(NoData);