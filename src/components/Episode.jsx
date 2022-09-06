import React from "react";
import {
  Box,
  Paper,
  Typography,
  ButtonBase,
} from "@mui/material";

const Episode = ({
  title,
  index,
  airDate,
  onClick,
}) => {
  return (
    <ButtonBase
      sx={{width:"100%"}}
      onClick={onClick}
    >
      <Paper
        sx={{width:"100%"}}
        variant="outlined"
      >
        <Box p={2}>
          <Typography
            color="primary.main"
            variant="subtitle1"
          >
            Episode {index}: <br/>{title}
          </Typography>
          <Typography
            variant="subtitle2"
          >
            Air Date: {airDate}
          </Typography>
        </Box>
      </Paper>
    </ButtonBase>
  );
};

export default React.memo(Episode);