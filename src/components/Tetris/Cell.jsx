import { StyledCell } from "./Styles/StyledCell";
import { TETROMINOS } from "./common/tetrominos";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};
export default Cell;
