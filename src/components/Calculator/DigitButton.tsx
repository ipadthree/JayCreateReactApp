import { ACTIONS } from "./";

export default function DigitButton({
  dispatch,
  digit,
}: {
  digit: string;
  dispatch: Function;
}): React.ReactElement {
  /**
   *Number button can only add digit
   */
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.ADD_DIGITS,
          payload: {
            digit,
          },
        })
      }
    >
      {digit}
    </button>
  );
}
