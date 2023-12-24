import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Jose1",
    email: "jose@gmail.com",
  });
  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log("Hey initial!");
  }, []);
  useEffect(() => {
    console.log("Hey! email ");
  }, [email]);
  useEffect(() => {
    console.log("Hey! Forms");
  }, [formState]);
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="jose@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "Jose" && <Message />}
    </>
  );
};
