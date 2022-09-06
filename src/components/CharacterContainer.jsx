import React from "react";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Character from "./Character";

const CharacterContainer = ({
  characters,
  onCharacterClick,
}) => {
  return (
    <Stack
      direction="column"
      spacing={2}
    >
      <Typography
        color="grey.500"
        variant="body1"
      >
        Characters:
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="stretch"
        gap="24px"
      >
        {characters?.map((character) => {
          if (!character) return null;
          if (typeof character === "string" || character instanceof String) {
            return (
              <Character
                key={character}
                name={character}
              />
            );
          }
          return (
            <Character
              key={character.char_id}
              id={character.char_id}
              name={character.name}
              onClick={(event) => onCharacterClick(event, character.char_id)}
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default React.memo(CharacterContainer);