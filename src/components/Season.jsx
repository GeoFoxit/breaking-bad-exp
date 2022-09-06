import { Box } from "@mui/material";
import React from "react";
import CustomHeading from "./common/CustomHeading";
import EpisodesContainer from "./EpisodesContainer";

const Season = ({
  seasonNumber,
  episodes,
  onEpisodeClick,
}) => {
  return (
    <Box>
      <Box
        py={2}
      >
        <CustomHeading>
          Season {seasonNumber}
        </CustomHeading>
      </Box>
      <EpisodesContainer
        episodes={episodes}
        displayActualIndex
        onEpisodeClick={onEpisodeClick}
      />
    </Box>
  );
};

export default React.memo(Season);
