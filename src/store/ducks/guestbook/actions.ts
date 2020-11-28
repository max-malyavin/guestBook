import {
  AddGUESTBOOKActionInterface,
  GUESTBOOKActionsType,
  SetGUESTBOOKActionInterface,
  SetGUESTBOOKLoadingStateActionInterface,
} from "./contracts/actionTypes";
import { GuestBookState } from "./contracts/state";

export const addGUESTBOOKData = (
  payload: GuestBookState["entries"]
): AddGUESTBOOKActionInterface => ({
  type: GUESTBOOKActionsType.ADD_GUESTBOOK_DATA,
  payload,
});

export const setGUESTBOOKLoadingState = (
  payload: Boolean
): SetGUESTBOOKLoadingStateActionInterface => ({
  type: GUESTBOOKActionsType.SET_LOADING_STATE,
  payload,
});

export const setGUESTBOOKData = (
  payload: GuestBookState["entries"]
): SetGUESTBOOKActionInterface => ({
  type: GUESTBOOKActionsType.SET_GUESTBOOK_DATA,
  payload,
});

export type GUESTBOOKActions =
  | AddGUESTBOOKActionInterface
  | SetGUESTBOOKLoadingStateActionInterface
  | SetGUESTBOOKActionInterface;
