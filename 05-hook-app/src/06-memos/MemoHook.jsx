import { useMemo, useState } from "react";
import { useCounter } from "../Hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Here we go...");
  }
  return `${iterationNumber} iterations done`;
};
export const MemoHook = () => {
  const { counter, increment } = useCounter(200);
  const [show, setShow] = useState(true);
  const MemorizedMemo = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter : <small> {counter}</small>
      </h1>
      <h4> {MemorizedMemo}</h4>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hiden {JSON.stringify(show)}
      </button>
    </>
  );
};
