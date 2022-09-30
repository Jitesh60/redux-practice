import { FC, memo } from "react";
import { Show } from "../model/show";
type showRowProps = {
  show: Show;
};
const showRow: FC<showRowProps> = ({ show }) => {
  return (
    <div className="flex items-stretch rounded-lg p-5 bg-gray-300">
      <img
        src={
          show.image?.medium ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/281px-Placeholder_view_vector.svg.png"
        }
      />
      <div className="ml-2">
        <h1>{show.name}</h1>
        <p>{show.summary}</p>
      </div>
    </div>
  );
};
showRow.defaultProps = {};
export default memo(showRow);
