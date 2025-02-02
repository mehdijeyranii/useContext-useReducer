import { ActionType, StateTypes } from "../../types/types";

export const initialState: StateTypes = { count: 0 };

export const counterReducer = (state: StateTypes, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
