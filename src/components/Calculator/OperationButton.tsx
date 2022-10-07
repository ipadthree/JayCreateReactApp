import { ACTIONS } from "./";

export default function OperationButton({
  dispatch,
  operation,
}: {
  dispatch: Function;
  operation: string;
}) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: {
            operation,
          },
        })
      }
    >
      {operation}
    </button>
  );
}
