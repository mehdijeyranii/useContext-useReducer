import { useCart } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="p-4 border rounded-md shadow-md w-96">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {state.cart.length === 0 ? (
        <p>The cart is empty!</p>
      ) : (
        state.cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-2 p-2 border-b "
          >
            <span>
              {item.name} - {item.quantity} pieces -{" "}
              {item.price.toLocaleString()} Rial
            </span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: item.id })
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
      {state.cart.length > 0 && (
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded mt-4"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear the shopping cart
        </button>
      )}
    </div>
  );
};

export default Cart;
