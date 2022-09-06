import { Avatar } from "@mui/material";
import React from "react";

const AvatarDisplay = ({
  imgSrc,
  alt,
}) => {
  return (
    <Avatar
      sx={{
        bgcolor: "primary.silver",
        height:"500px",
        width:"300px",
        transition: "0.2s ease",
        ":hover": { transform: "scale(1.1)" }
      }}
      variant="square"
      src={imgSrc}
    >
      {alt}
    </Avatar>
  );
};

export default React.memo(AvatarDisplay);