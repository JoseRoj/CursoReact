import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1> HomePage </h1>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, nmame: "Esteban", email: "Esteban@google.com" })
        }
      >
        Establecer usuario
      </button>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <hr />
    </>
  );
};
