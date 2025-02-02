// cartReducer.ts
export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  
  export type CartState = {
    cart: CartItem[];
  };
  
  export type CartAction =
    | { type: "ADD_ITEM"; payload: CartItem }
    | { type: "REMOVE_ITEM"; payload: number }
    | { type: "CLEAR_CART" };
  
  export const initialState: CartState = {
    cart: [],
  };
  
  export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case "ADD_ITEM": {
        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : item
            ),
          };
        } else {
          return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        }
      }
      case "REMOVE_ITEM":
        return {
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      case "CLEAR_CART":
        return { cart: [] };
      default:
        return state;
    }
  };
  