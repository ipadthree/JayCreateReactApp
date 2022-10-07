import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "./Calculator.css";

export const ACTIONS = {
  ADD_DIGITS: "add-digit",
  DELETE_DIGIT: "delete",
  CHOOSE_OPERATION: "choose-opertion",
  EVALUTATE: "evaluate",
  CLEAR: "clear",
};

function evaluate({ currentOperand, previousOperand, operation }: any) {
  const current = parseFloat(currentOperand);
  const previous = parseFloat(previousOperand);
  if (isNaN(current) || isNaN(previous)) return "";
  let computation;
  switch (operation) {
    case "+":
      computation = previous + current;
      break;
    case "-":
      computation = previous - current;
      break;
    case "*":
      computation = previous * current;
      break;
    case "/":
      computation = previous / current;
      break;
  }
  return `${computation}`;
}

function reducer(state: any, { type, payload }: any) {
  switch (type) {
    case ACTIONS.ADD_DIGITS:
      if (state.override) {
        return {
          ...state,
          currentOperand: payload.digit,
          override: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        /*只是改变strings*/
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      /*Use == to include undefined case*/
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      // this means has previous and operation, and user wants to replace operation
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      return {
        ...state,
        currentOperand: null,
        /*why set operation here now?*/
        operation: payload.operation,
        previousOperand: evaluate(state),
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.override) return {};
      if (state.currentOperand == null) {
        return state;
      }
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }

      return {
        ...state,
        // Remove the last item in string
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUTATE:
      if (
        state.currentOperand == null ||
        state.previousOperand == null ||
        state.operation == null
      ) {
        return state;
      }
      return {
        ...state,
        currentOperand: evaluate(state),
        operation: null,
        previousOperand: null,
        // After evaluate, any next number should override current result
        override: true,
      };
    /*reducer must defalut return original state, or state becomes undefined*/
    default:
      return state;
  }
}

/**
 * 所以这个calculator的主要难点就是在state management里面
 */
const Calculator = (): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, {});
  const { currentOperand, previousOperand, operation } = state;
  return (
    <div className="calculator-container">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <OperationButton operation="/" dispatch={dispatch} />
        <DigitButton digit={"1"} dispatch={dispatch} />
        <DigitButton digit={"2"} dispatch={dispatch} />
        <DigitButton digit={"3"} dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit={"4"} dispatch={dispatch} />
        <DigitButton digit={"5"} dispatch={dispatch} />
        <DigitButton digit={"6"} dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit={"7"} dispatch={dispatch} />
        <DigitButton digit={"8"} dispatch={dispatch} />
        <DigitButton digit={"9"} dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit={"0"} dispatch={dispatch} />
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUTATE })}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
