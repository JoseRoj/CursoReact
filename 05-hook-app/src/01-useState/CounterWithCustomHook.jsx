import { useCounter } from "../Hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1> Counter : {counter} </h1>
      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        -1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
    </div>
  );
};
