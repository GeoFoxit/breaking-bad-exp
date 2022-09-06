import React from "react";
import { Grid } from "@mui/material";
import Episode from "./Episode";

const EpisodesContainer = ({
  episodes,
  displayActualIndex,
  onEpisodeClick,
}) => {
  return (
    <Grid
      container
      spacing={2}
    >
      {episodes?.map((episode, localIndex) => {
        const {
          title,
          episode: index,
          episode_id: id,
          air_date: airDate,
        } = episode;
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={id}
          >
            <Episode
              title={title}
              index={displayActualIndex ? index : localIndex + 1}
              airDate={airDate}
              onClick={(event) => onEpisodeClick(event, id)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default React.memo(EpisodesContainer);
