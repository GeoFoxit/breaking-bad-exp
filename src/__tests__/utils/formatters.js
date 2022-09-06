import { groupEpisodesBySeasons } from "../../utils/formatters";

const makeEpisode = (
  id,
  title,
  season,
) => ({
  id,
  title,
  season,
});

it("Format episodes by seasons", () => {
  // Prepare
  const episodes = [
    makeEpisode(1, "Big", 3),
    makeEpisode(2, "One", 1),
    makeEpisode(3, "None", 2),
  ];
  // Execute
  const groupedEpisodes = groupEpisodesBySeasons(episodes);
  // Assert
  expect(groupedEpisodes).toStrictEqual({
    1: [makeEpisode(2, "One", 1)],
    2: [makeEpisode(3, "None", 2)],
    3: [makeEpisode(1, "Big", 3)],
  });
});
 