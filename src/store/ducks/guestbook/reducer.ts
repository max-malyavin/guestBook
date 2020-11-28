import produce, { Draft } from "immer";
import { GUESTBOOKActions } from "./actions";
import { GUESTBOOKActionsType } from "./contracts/actionTypes";
import { GuestBookState } from "./contracts/state";

const initialGuestbookState: GuestBookState = {
  entries: [],
  loadingState: false,
};

export const guestbookReducer = produce(
  (draft: Draft<GuestBookState>, action: GUESTBOOKActions) => {
    switch (action.type) {
      case GUESTBOOKActionsType.ADD_GUESTBOOK_DATA:
        draft.entries?.unshift(...action.payload);
        break;
      case GUESTBOOKActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case GUESTBOOKActionsType.SET_GUESTBOOK_DATA:
        draft.entries = action.payload;
        draft.loadingState = false;
        break;
      default:
        break;
    }
  },
  initialGuestbookState
);
