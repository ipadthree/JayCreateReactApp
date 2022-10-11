import { StyledStartButton } from "./Styles/StyledStartButton";

const StartButton = ({ callBack }) => {
  return <StyledStartButton onClick={callBack}>start button</StyledStartButton>;
};

export default StartButton;
