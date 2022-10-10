import Cell from "./Cell";

interface Props {
  stage?: any;
}

export default function Stage({ stage }: Props): React.ReactElement {
  return (
    <div>
      {stage.map((row: any[]) =>
        row.map((cell, index: number) => <Cell key={index} type={cell[0]} />)
      )}
      <Cell />
    </div>
  );
}
