import { entriesAPI } from "../../../api/entries";
import { setGUESTBOOKData, setGUESTBOOKLoadingState } from "./actions";

export const actionsThunkGuestbook = {
  getEntries: () => async (dispatch: any) => {
    try {
      dispatch(setGUESTBOOKLoadingState(true));
      const response = await entriesAPI.getAll();
      dispatch(setGUESTBOOKData(response.data));
    } catch (error) {
      dispatch(setGUESTBOOKLoadingState(false));
    }
  },
};
