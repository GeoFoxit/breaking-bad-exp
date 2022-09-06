import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Loader from "../components/common/Loader";
import NoData from "../components/common/NoData";
import { CHARACTER_ACTIONS_TYPES } from "../redux/actionTypes";
import CustomTextDisplay from "../components/common/CustomTextDisplay";
import CustomHeading from "../components/common/CustomHeading";
import OccupationDisplay from "../components/OccupationDisplay";
import AvatarDisplay from "../components/common/AvatarDisplay";

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    allCharacters,
    selectedCharacter,
    isLoadingCharacters,
  } = useSelector(state => state);

  useEffect(() => {
    if (!Number.isInteger(Number(id))) return;
    dispatch({
      type: CHARACTER_ACTIONS_TYPES.SET_SELECTED_CHARACTER,
      payload: id,
    });
    return (() => {
      dispatch({
        type: CHARACTER_ACTIONS_TYPES.CLEAR_SELECTED_CHARACTER,
      });
    });
  }, [id]);
  
  const character = useMemo(
    () => allCharacters?.find((char) => char.char_id == selectedCharacter),
    [selectedCharacter, allCharacters],
  );

  if (isLoadingCharacters) return <Loader />;

  if (!character) return <NoData />;

  const {
    name,
    birthday,
    nickname,
    status,
    img,
    occupation,
  } = character;

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Stack
          spacing={4}
        >
          <CustomHeading>
            Character: {name}
          </CustomHeading>
          <Stack
            direction="row"
            justifyContent="center"
            flexWrap="wrap"
            gap={12}
          >
            <AvatarDisplay
              imgSrc={img}
              alt={name}
            />
            <Stack
              direction="column"
              spacing={4}
            >
              <CustomTextDisplay
                title="Nickname:"
                value={nickname}
              />
              <CustomTextDisplay
                title="Status:"
                value={status}
              />
              <CustomTextDisplay
                title="Birthday:"
                value={birthday}
              />
            </Stack>
            {!!occupation?.length && (
              <div>
                <Typography
                  variant="body1"
                  color="grey.500"
                >
                Occupation:
                </Typography>
                <OccupationDisplay occupation={occupation}/>
              </div>
            )}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default CharacterPage;