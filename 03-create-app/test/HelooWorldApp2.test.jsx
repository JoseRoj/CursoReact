import { App } from "../src/HelooWorldApp";
import {getByText, render, screen} from "@testing-library/react";
describe("Pruebas en el componente <HelooWorldApp2 />", () => {
    const title = "Hola soy Goku";
    const subTitle = "Soy un subtitulo";

    test("debe de hacer match con el snapshot", () => {
        const { container } = render(<App title= {title}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render(<App title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe de mostar el titulo en un h1', () => {
        render(<App title={title} />);
        expect(screen.getByRole('heading',{level : 1}).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enciado por props', () => {
        render(<App title={title} subTitle={subTitle} />);
        expect(screen.getByText(subTitle)).toBeTruthy();
    });
});