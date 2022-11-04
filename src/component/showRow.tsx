import { FC, memo } from "react";
import { Show } from "../model/show";
import { useNavigate } from "react-router-dom";
type showRowProps = {
  show: Show;
};
const showRow: FC<showRowProps> = ({ show }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/shows/" + show.id)}
      className="flex cursor-pointer items-stretch rounded-lg p-5 bg-gray-300"
    >
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
