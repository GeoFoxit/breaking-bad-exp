import React, { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "../components/common/Loader";
import NoData from "../components/common/NoData";
import { Box, Container, Stack } from "@mui/material";
import CharacterContainer from "../components/CharacterContainer";
import { useDispatch, useSelector } from "react-redux";
import { EPISODES_ACTION_TYPES } from "../redux/actionTypes";
import CustomTextDisplay from "../components/common/CustomTextDisplay";
import CustomHeading from "../components/common/CustomHeading";

const EpisodePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    allEpisodes,
    allCharacters,
    selectedEpisode,
    isLoadingEpisodes,
  } = useSelector(state => state);

  useEffect(() => {
    if (!Number.isInteger(Number(id))) return;
    dispatch({
      type: EPISODES_ACTION_TYPES.SET_SELECTED_EPISODE,
      payload: id,
    });
    return (() => {
      dispatch({
        type: EPISODES_ACTION_TYPES.CLEAR_SELECTED_EPISODE,
      });
    });
  }, [id]);
  
  const episode = useMemo(
    () => allEpisodes?.find((ep) => ep.episode_id == selectedEpisode),
    [selectedEpisode, allEpisodes],
  );

  const characters = useMemo(
    () => {
      if (!episode || !allCharacters?.length) return [];
      return episode?.characters?.map(
        (charName) => {
          const foundChar = allCharacters?.find((char) => char.name === charName);
          if (!foundChar) return charName;
          return foundChar;
        },
      );
    },
    [episode,allCharacters]
  );

  const handleCharacterClick = useCallback(
    (event, id) => {
      navigate(`/character/${id}`);
    },
    [],
  );

  if (isLoadingEpisodes) return <Loader />;

  if (!episode || !characters) return <NoData />;

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Stack
          spacing={4}
        >
          <CustomHeading>
            Episode {episode.episode}: {episode.title}
          </CustomHeading>
          <CustomTextDisplay
            title="Air Date:"
            value={episode.air_date}
          />
          <CharacterContainer
            characters={characters}
            onCharacterClick={handleCharacterClick}
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default EpisodePage;