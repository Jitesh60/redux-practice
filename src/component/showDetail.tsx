import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { Show } from "../model/show";
import { fetchShowsAction } from "../redux/action/show";
import {
  showEntitiesSelector,
  showLoadingSelector,
} from "../redux/selector/show";
import { State } from "../redux/store";

type showDetailProps = {
  show: Show;
  fetchShow: (id: number) => void;
  loading: boolean;
} & WithRouterProps;

const showDetail: FC<showDetailProps> = ({
  show,
  fetchShow,
  params,
  loading,
}) => {
  useEffect(() => {
    fetchShow(+params.id);
  }, []);

  return (
    <div className="bg-red-500 p-5">
      {loading && (
        <div className="text-black text-2xl bg-blue-800">Loading...</div>
      )}
      {show && (
        <div className="flex flex-col bg-gray-300 rounded-md">
          <div className="w-64 h-64">
            <img
              className="w-full h-full"
              src={
                show.image?.medium ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/281px-Placeholder_view_vector.svg.png"
              }
            />
          </div>
          <div className="ml-2">
            <h1>{show.name}</h1>
            <p>{show.summary}</p>
            <h1>{show.language}</h1>
            <h1>{show.type}</h1>
            <h1>{show.weight}</h1>
            <h1>{show.rating.average}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

showDetail.defaultProps = {};

const mapStateToProps = (s: State, props: any) => ({
  show: showEntitiesSelector(s)[+props.params.id],
  loading: showLoadingSelector(s)[+props.params.id],
});
const mapDispatchToProps = {
  fetchShow: fetchShowsAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(showDetail))
);
