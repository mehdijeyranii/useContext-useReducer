import { CounterProvider } from "./context/counter/CounterProvider";
import Counter from "./Counter";

const App = () => {
  return (
    <CounterProvider>
      <div className="flex items-center justify-center min-h-screen">
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;
