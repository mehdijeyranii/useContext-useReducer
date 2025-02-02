import { useCounter } from "./context/counter/useContext";

const Counter = () => {
  const { state, dispatch } = useCounter();
  return (
    <div className="p-6 bg-white/5 shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">Count: {state.count}</h2>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Increase
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-rose-500 text-white rounded-md"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Rest
        </button>
      </div>
    </div>
  );
};

export default Counter;
