import { CounterProvider } from "./context/counter/CounterProvider";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";
import CounterStatus from "./CounterStatus";

const App = () => {
  return (
    <CounterProvider>
      <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
        <CounterStatus />
        <CounterDisplay />
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;
