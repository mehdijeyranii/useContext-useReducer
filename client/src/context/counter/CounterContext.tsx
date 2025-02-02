import { createContext } from "react";
import { counterReducer, initialState } from "./CounterReducer";
import { ActionType, StateTypes } from "../../types/types";

export const CounterContext = createContext<
  | {
      state: StateTypes;
      dispatch: React.Dispatch<ActionType>;
    }
  | undefined
>(undefined);

export { counterReducer, initialState };
