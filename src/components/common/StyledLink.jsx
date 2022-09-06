import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(
  ({ theme }) => `
    text-decoration: none;
    color: ${theme.palette.primary.main};
    :hover {
      color: inherit;
    }
  `,
);

export default StyledLink;