import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onMouseMove);
    //console.log("Componente montado");
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      //console.log("Componente desmontado");
    };
  }, []);

  return (
    <>
      <h3> Usuario ya existe</h3>
    </>
  );
};
