/**
 * Takes a list of episodes with specified season and
 * returns a new object with grouped episodes by seasons.
 * @param episodes List of episodes
 * @returns Grouped episodes by seasons 
 */
export const groupEpisodesBySeasons = (episodes) => {
  if (!Array.isArray(episodes)) throw new Error("Episodes list is not an array");
  const groupedEpisodes = {};
  episodes.forEach((episode) => {
    const seasonNumber = parseInt(episode.season);
    if (!groupedEpisodes[seasonNumber]) groupedEpisodes[seasonNumber] = [];
    groupedEpisodes[seasonNumber].push(episode);
  });
  return groupedEpisodes;
};
