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

//--------------------------------------------------------------------

export const FETCH_SHOW = "shows fetch";
export const FETCHED_SHOW = "shows fetched";

export const fetchShowsAction = (id: number) => ({
  type: FETCH_SHOW,
  payload: id,
});

export const fetchedShowsAction = (show: Show) => ({
  type: FETCHED_SHOW,
  payload: show,
});
