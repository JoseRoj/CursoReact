import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {
  const Pref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { height, width } = Pref.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={Pref} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code> {JSON.stringify(boxSize)}</code>
    </>
  );
};
