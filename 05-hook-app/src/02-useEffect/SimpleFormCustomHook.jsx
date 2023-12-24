import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../Hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //const { username, email, password } = formState;
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
      <h1>Formulario CustomHook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      {/*username === "Jose" && <Message />*/}
    </>
  );
};
