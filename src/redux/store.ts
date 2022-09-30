import { createStore, applyMiddleware, Reducer } from "redux";
import { SHOW_FETCH, SHOW_FETCHED } from "./action/show";
import { rootSaga, sagaMiddleware } from "./saga/show";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Show } from "../model/show";

export type State = {
  shows: { [q: string]: Show[] };
  showsQuery: string;
};

const initialState: State = {
  shows: {},
  showsQuery: "",
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FETCH:
      return { ...state, showsQuery: action.payload };
    case SHOW_FETCHED:
      const { query, shows } = action.payload;
      return { ...state, shows: { ...state.shows, [query]: shows } };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
