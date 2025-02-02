import { useCounter } from "./context/counter/useContext";

const Counter = () => {
  const { dispatch } = useCounter();
  return (
    <div className="p-6 bg-zinc-50/5 border border-zinc-50 shadow-md rounded-md text-center w-96">
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-green-800 text-white rounded"
        >
          Increase
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-rose-800 text-white rounded"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Rest
        </button>
      </div>
    </div>
  );
};

export default Counter;
