import React from "react";
import {
  Box,
  Container,
} from "@mui/material";
import SeasonsContainer from "../components/SeasonsContainer";
import Loader from "../components/common/Loader";
import NoData from "../components/common/NoData";
import { useSelector } from "react-redux";
import { groupEpisodesBySeasons } from "../utils/formatters";
import { useNavigate } from "react-router";

const MainPage = () => {

  const navigate = useNavigate();

  const {
    isLoadingEpisodes,
    allEpisodes,
  } = useSelector(
    state => state,
  );
  
  const handleEpisodeClick = (event, id) => {
    navigate(`/episode/${id}`);
  };

  if (isLoadingEpisodes) return <Loader />;
  if (!allEpisodes?.length) return <NoData />;

  return (
    <Container maxWidth="lg">
      <Box py={2}>
        <SeasonsContainer
          // TODO: Handle error in groupEpisodesBySeasons
          episodesBySeasons={groupEpisodesBySeasons(allEpisodes)}
          onEpisodeClick={handleEpisodeClick}
        />
      </Box>
    </Container>
  );
};

export default MainPage;