import { GuestBookEntry } from "../store/ducks/guestbook/contracts/state";
import { istance } from "./api";

export const entriesAPI = {
  getAll() {
    return istance.get(`entries?_sort=submitted&_order=asc`);
  },
  create(data: GuestBookEntry) {
    return istance.post(`entries`, data);
  },
};
