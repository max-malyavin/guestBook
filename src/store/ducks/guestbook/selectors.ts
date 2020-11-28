import { RootState } from "../../store";
import { GuestBookState } from "./contracts/state";

export const selectGuestbook = (state: any): GuestBookState => state.guestbook;

export const selectLoadingState = (state: RootState): any =>
  selectGuestbook(state).loadingState;

export const selectEntries = (state: RootState): any =>
  selectGuestbook(state).entries;
