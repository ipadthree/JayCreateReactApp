interface Props {
  gameOver?: any;
  text?: string;
}

const Display = ({ gameOver, text }: Props): React.ReactElement => {
  return <div>{text}</div>;
};

export default Display;
