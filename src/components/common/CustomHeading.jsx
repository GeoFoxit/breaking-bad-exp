import { Typography } from "@mui/material";
import React from "react";

const CustomHeading = ({text}) => {
  return (
    <Typography
      variant="h2"
      color="grey.800"
    >
      <b>{text}</b>
    </Typography>
  );
};

export default CustomHeading;