import { FC, memo, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Show } from "../model/show";
import { fetchShowAction } from "../redux/action/show";
import { showQuerySelector, showSelector } from "../redux/selector/show";
import { State } from "../redux/store";
import ShowRow from "./showRow";

type showPageProps = {
  show: Show[];
  fetchShows: (query: string) => void;
  query: string;
};
const showPage: FC<showPageProps> = ({ show, fetchShows, query }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };
  return (
    <div className="space-y-3 p-5 bg-gray-600">
      <input
        value={query}
        onChange={handleChange}
        className="w-full p-6 rounded-lg border-gray-600 "
        placeholder="Search"
      />
      {show.map((s) => (
        <ShowRow key={s.id} show={s} />
      ))}
    </div>
  );
};
showPage.defaultProps = {};

const mapStateToProps = (s: State) => ({
  show: showSelector(s),
  query: showQuerySelector(s),
});
const mapDispatchToProps = {
  fetchShows: fetchShowAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(showPage));
