import { fireEvent, render, screen} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el componente <CounterApp />", () => {
    const value = 10;
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        render(<CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain("10");
    });

    test("debe de incrementar con el botón +1", () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(value + 1)).toBeTruthy();  
    });

    test("debe de decrementar con el botón -1", () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(value - 1)).toBeTruthy();  
    });

    test("debe de colocar el valor por defecto con el btn reset", () => {
        render(<CounterApp value={355} />);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        //fireEvent.click(screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));
        expect(screen.getByText(355)).toBeTruthy();  
    });
});