import {setGameState, setGameWinner} from "../store/slices/game";
import {setRoomId, setRoomUsers} from "../store/slices/room";
import {setUserId} from "../store/slices/user";

export const Scenes = {
  MENU: "MENU",
  CREATE_ROOM: "CREATE_ROOM",
  JOIN_ROOM: "JOIN_ROOM",
  WAIT_ROOM: "WAIT_ROOM",
  KICKED_ROOM: "KICKED_ROOM",
  FULL_ROOM: "FULL_ROOM",
  NOT_EXISTS_ROOM: "NOT_EXISTS_ROOM",
  GAME: "GAME",
  GAME_END: "GAME_END",
};

export const ActionEvents = [
  { event: "id", action: setUserId },
  { event: "gameState", action: setGameState },
  { event: "gameWinner", action: setGameWinner },
  { event: "roomCreated", action: setRoomId },
  { event: "roomUserState", action: setRoomUsers }
]

export const Themes = {
  GRYFFINDOR: {
    key: "gryffindor",
    primaryColor: "#8F070C",
    secondaryColor: "#F8D149",
  },
  SLYTHERIN: {
    key: "slytherin",
    primaryColor: "#13510E",
    secondaryColor: "#B5B5B5",
  },
  HUFFLEPUFF: {
    key: "hufflepuff",
    primaryColor: "#E8AF2D",
    secondaryColor: "#3F3F3F",
  },
  RAVENCLAW: {
    key: "ravenclaw",
    primaryColor: "#0A4883",
    secondaryColor: "#B5B5B5",
  },
};

export const Figures = {
  moony: 'moony',
  wormtail: 'wormtail',
  padfoot: 'padfoot',
  prongs: 'prongs'
}