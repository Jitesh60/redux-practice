import { Reducer } from "redux";
import { Show } from "../../model/show";
import {
  FETCHED_SHOW,
  FETCH_SHOW,
  SHOW_FETCH,
  SHOW_FETCHED,
} from "../action/show";
import { normalize, schema } from "normalizr";

type showState = {
  entities: { [id: number]: Show };
  againstQuery: { [q: string]: number[] };
  query: string;
  showloading: { [id: number]: boolean };
};

const initialShowState: showState = {
  entities: {},
  query: "",
  againstQuery: {},
  showloading: {},
};
const showReducer: Reducer<showState> = (state = initialShowState, action) => {
  switch (action.type) {
    case FETCH_SHOW:
      return {
        ...state,
        showloading: { [action.payload]: true },
      };
    case FETCHED_SHOW:
      const show: Show = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [show.id]: show },
        showloading: { [show.id]: false },
      };
    case SHOW_FETCH:
      return {
        ...state,
        query: action.payload,
      };

    case SHOW_FETCHED:
      const { query, shows }: { query: string; shows: Show[] } = action.payload;
      const showEntity = new schema.Entity("shows");
      const normalized = normalize(shows, [showEntity]);
      const normalizedShow = normalized.entities.shows;

      const ids = shows.map((s) => s.id);

      return {
        ...state,
        entities: { ...state.entities, ...normalizedShow },
        againstQuery: { ...state.againstQuery, [query]: ids },
      };

    default:
      return state;
  }
};

export default showReducer;
