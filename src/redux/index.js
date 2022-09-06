import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import EpisodeService from "../api/episode-service";
import CharacterService from "../api/character-service";
import { CHARACTER_ACTIONS_TYPES, EPISODES_ACTION_TYPES } from "./actionTypes";


// Store
const initialState = {
  // Loading Flags
  isLoadingEpisodes: null,
  isLoadingCharacters: null,
  // Main Data
  allEpisodes: null,
  allCharacters: null,
  // Selected Data
  selectedEpisode: null,
  selectedCharacter: null,
  // Errors
  loadingEpisodesError: null,
  loadingCharactersError: null,
};


// Reducers
const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  // Episodes
  case EPISODES_ACTION_TYPES.FETCH_ALL_EPISODES:
    return {
      ...state,
      isLoadingEpisodes: true,
      allEpisodes: null,
      loadingEpisodesError: null,
    };
  case EPISODES_ACTION_TYPES.FETCH_ALL_EPISODES_SUCCESS:
    return {
      ...state,
      isLoadingEpisodes: false,
      allEpisodes: payload,
    };
  case EPISODES_ACTION_TYPES.FETCH_ALL_EPISODES_FAILURE:
    return {
      ...state,
      isLoadingEpisodes: false,
      allEpisodes: null,
      loadingEpisodesError: payload,
    };
  case EPISODES_ACTION_TYPES.SET_SELECTED_EPISODE:
    return {
      ...state,
      selectedEpisode: payload,
    };
  case EPISODES_ACTION_TYPES.CLEAR_SELECTED_EPISODE:
    return {
      ...state,
      selectedEpisode: null,
    };
  // Characters
  case CHARACTER_ACTIONS_TYPES.FETCH_ALL_CHARACTERS:
    return {
      ...state,
      isLoadingCharacters: true,
      allCharacters: null,
      loadingCharactersError: null,
    };
  case CHARACTER_ACTIONS_TYPES.FETCH_ALL_CHARACTERS_SUCCESS:
    return {
      ...state,
      isLoadingCharacters: false,
      allCharacters: payload,
    };
  case CHARACTER_ACTIONS_TYPES.FETCH_ALL_CHARACTERS_FAILURE:
    return {
      ...state,
      isLoadingCharacters: false,
      allCharacters: null,
      loadingCharactersError: payload,
    };
  case CHARACTER_ACTIONS_TYPES.SET_SELECTED_CHARACTER:
    return {
      ...state,
      selectedCharacter: payload,
    };
  case CHARACTER_ACTIONS_TYPES.CLEAR_SELECTED_CHARACTER:
    return {
      ...state,
      selectedCharacter: null,
    };
  default:
    return state;
  }
};

// Action creators
// Episodes
export const fetchEpisodes = () => async (dispatch) => {
  dispatch({
    type: EPISODES_ACTION_TYPES.FETCH_ALL_EPISODES,
  });
  try {
    const allEpisodes = await EpisodeService.getAllEpisodes();
    dispatch({
      type: EPISODES_ACTION_TYPES.FETCH_ALL_EPISODES_SUCCESS,
      payload: allEpisodes,
    });
  } catch (error) {
    dispatch({
      type: EPISODES_ACTION_TYPES.FETCH_ALL_EPISODES_FAILURE,
      payload: error,
    });
  }
};
// Characters
export const fetchCharacters = () => async (dispatch) => {
  dispatch({
    type: CHARACTER_ACTIONS_TYPES.FETCH_ALL_CHARACTERS,
  });
  try {
    const allCharacters = await CharacterService.getAllCharacters();
    dispatch({
      type: CHARACTER_ACTIONS_TYPES.FETCH_ALL_CHARACTERS_SUCCESS,
      payload: allCharacters,
    });
  } catch (error) {
    dispatch({
      type: CHARACTER_ACTIONS_TYPES.FETCH_ALL_CHARACTERS_FAILURE,
      payload: error,
    });
  }
};

// Store export
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 