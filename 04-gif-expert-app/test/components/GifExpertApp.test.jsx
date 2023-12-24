import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("Prueba de si se Añaden nueva categoria al enviar formulario", () => {
    render(<GifExpertApp />);
    const inputValue = "Saitama";
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(screen.getByText(inputValue));
    screen.debug();
  });
  test("No debe añadir una categoria ya añadida", () => {
    render(<GifExpertApp />);
    const inputValue = "Saitama";
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(screen.getAllByText(inputValue).length).toBe(1);
  });
});
