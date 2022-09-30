import { FC, memo } from "react";
type InputProps = {};
const Input: FC<InputProps> = () => {
  return (
    <>
      <input
        className="w-full p-6 rounded-lg border-gray-600 "
        placeholder="Search"
      />
    </>
  );
};
Input.defaultProps = {};
export default memo(Input);
