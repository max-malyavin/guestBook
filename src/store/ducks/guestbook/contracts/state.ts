export interface GuestBookEntry {
  id: number;
  name: string;
  content: string;
  submitted: string;
}

export interface GuestBookState {
  entries: GuestBookEntry[] ;
  loadingState: Boolean;
}
