import React from "react";

const ShowIncrement = React.memo(({ increment, value }) => {
  console.log("Me volví a generar :(");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(value);
      }}
    >
      Incrementar
    </button>
  );
});

export default ShowIncrement;
