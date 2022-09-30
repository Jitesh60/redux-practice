import { Show } from "../../model/show";

export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const fetchShowAction = (query: string) => ({
  type: SHOW_FETCH,
  payload: query,
});

export const fetchedShowAction = (query: string, shows: Show[]) => ({
  type: SHOW_FETCHED,
  payload: { query, shows },
});
