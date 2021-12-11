import { getRoomId } from "../../utils";
import { SET_ROOM_ID, SET_ROOM_USERS } from "../actionTypes";

const initialState = {
  id: getRoomId() || null,
  users: [],
};

const room = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SET_ROOM_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default room;
