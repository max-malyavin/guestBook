import { combineReducers } from "redux";
import { guestbookReducer } from "./ducks/guestbook/reducer";

export default combineReducers({
  guestbook: guestbookReducer,
});
