export type StateTypes = {
  count: number;
};

export type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };
