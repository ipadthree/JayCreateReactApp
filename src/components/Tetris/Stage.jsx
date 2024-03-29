import Cell from "./Cell";
import { StyledStage } from "./Styles/StyledStage";

export default function Stage({ stage }) {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, index) => <Cell key={index} type={cell[0]} />)
      )}
    </StyledStage>
  );
}
