import { Typography } from "@mui/material";
import React from "react";

const CustomTextDisplay = ({
  title,
  value,
}) => {
  return (
    <div>
      <Typography
        variant="body1"
        color="grey.500"
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
      >
        {value}
      </Typography>
    </div>
  );
};

export default React.memo(CustomTextDisplay);