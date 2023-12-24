import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
describe("Pruebas en <AddCategory />", () => {
  test("debe cambiar el valor de la caja", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    //screen.debug();
    expect(input.value).toBe("Saitama");
  });

  test("Debe de llamar onNewCategory si el input tiene texto", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn(); // Mock

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    //screen.debug();
    fireEvent.submit(form);
    //expect(onNewCategory).toHaveBeenCall();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar a onNewCtegory si input es vacio", () => {
    const onNewCategory = jest.fn(); // Mock
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
