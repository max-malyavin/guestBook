import { Action } from "redux";
import { GuestBookState } from "./state";

export enum GUESTBOOKActionsType {
  ADD_GUESTBOOK_DATA = "guestbook/ADD_GUESTBOOK_DATA",
  SET_LOADING_STATE = "guestbook/SET_LOADING_STATE",
  SET_GUESTBOOK_DATA = "guestbook/SET_GUESTBOOK_DATA",
}

export interface AddGUESTBOOKActionInterface
  extends Action<GUESTBOOKActionsType> {
  type: GUESTBOOKActionsType.ADD_GUESTBOOK_DATA;
  payload: GuestBookState["entries"];
}
export interface SetGUESTBOOKActionInterface
  extends Action<GUESTBOOKActionsType> {
  type: GUESTBOOKActionsType.SET_GUESTBOOK_DATA;
  payload: GuestBookState["entries"];
}

export interface SetGUESTBOOKLoadingStateActionInterface
  extends Action<GUESTBOOKActionsType> {
  type: GUESTBOOKActionsType.SET_LOADING_STATE;
  payload: Boolean;
}
