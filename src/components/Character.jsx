import React from "react";
import {
  Box,
  Paper,
  Typography,
  ButtonBase,
} from "@mui/material";

const Character = ({
  id,
  name,
  onClick,
}) => {

  const isNoId = Number.isNaN(Number(id));

  return (
    <ButtonBase
      onClick={onClick}
      disabled={isNoId}
    >
      <Paper variant="outlined">
        <Box p={2}>
          <Typography
            align="center"
            color={isNoId ? "grey.500" : "primary.main"}
          >
            {name}
          </Typography>
        </Box>
      </Paper>
    </ButtonBase>
  );
};

export default React.memo(Character);