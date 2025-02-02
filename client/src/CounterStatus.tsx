import { useCounter } from "./context/counter/useContext";

const CounterStatus = () => {
  const counterContext = useCounter();

  if (!counterContext) {
    return (
      <p className="p-4 border border-rose-600 rounded-md shadow-md text-center bg-rose-500/15 text-rose-600">
        The context is not set{" "}
      </p>
    );
  }

  const { state } = counterContext;

  let messageStatus;
  if (state.count > 0) {
    messageStatus = "Positive number";
  } else if (state.count < 0) {
    messageStatus = "Negative number";
  } else {
    messageStatus = "Zero number";
  }

  return (
    <div className="p-4 border border-zinc-50 rounded-md shadow-md text-center bg-zinc-50/5 text-zinc-50 w-96">
      <h2 className="text-xl font-semibold">Counter status:</h2>
      <p
        className={`text-3xl font-bold ${
          state.count == 0
            ? "text-zinc-50"
            : state.count < 0
            ? "text-rose-500"
            : "text-lime-500"
        }`}
      >
        {messageStatus}
      </p>
    </div>
  );
};

export default CounterStatus;
