import { State } from "../store";

export const showSelector = (s: State) => s.shows[s.showsQuery] || [];
export const showQuerySelector = (s: State) => s.showsQuery;
