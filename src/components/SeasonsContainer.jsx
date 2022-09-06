import React from "react";
import Season from "./Season";

const SeasonsContainer = ({
  episodesBySeasons,
  onEpisodeClick,
}) => {
  return (
    <div>
      {Object
        .entries(episodesBySeasons)
        .map(
          ([
            seasonNumber,
            episodes,
          ]) => (
            <Season
              key={seasonNumber}
              seasonNumber={seasonNumber}
              episodes={episodes}
              onEpisodeClick={onEpisodeClick}
            />
          )
        )}
    </div>
  );
};

export default React.memo(SeasonsContainer);