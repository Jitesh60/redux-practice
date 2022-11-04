import { createStore, applyMiddleware, Reducer, combineReducers } from "redux";
import { rootSaga, sagaMiddleware } from "./saga/show";
import { composeWithDevTools } from "@redux-devtools/extension";
import showReducer from "./reducer/show";

export const reducer = combineReducers({
  shows: showReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;
