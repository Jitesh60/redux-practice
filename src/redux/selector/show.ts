import { State } from "../store";
import { createSelector } from "reselect";

const showStateSelector = (s: State) => s.shows;

const showAgainstQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.againstQuery
);

export const showEntitiesSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);

// export const showQuerySelector = (s: State) => s.shows.query;
export const showQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);

const showIdsSelector = createSelector(
  showQuerySelector,
  showAgainstQuerySelector,
  (query, againstQuery) => againstQuery[query] || []
);

// export const showSelector = (s: State) => {
//   const showIds = s.shows.againstQuery[s.shows.query] || [];

//   return showIds.map((id) => s.shows.entities[id]);
// };
export const showSelector = createSelector(
  showEntitiesSelector,
  showIdsSelector,
  (entities, ids) => ids.map((id) => entities[id])
);

export const showLoadingSelector = createSelector(
  showStateSelector,
  (show) => show.showloading
);
