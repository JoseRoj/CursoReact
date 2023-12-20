import { App } from "../src/HelooWorldApp";
import {getByTestId, render} from "@testing-library/react";
describe("Pruebas en el componente <HelooWorldApp />", () => {
    test("debe de hacer match con el snapshot", () => {
        const title = "Hola Mundo";
        const { container } = render(<App title= {title}/>);
        expect(container).toMatchSnapshot();
    });
    test("debe de mostrar el titulo en un h1", () => {
        const title = "Hola Mundo";
        const { container, getByText, getByTestId } = render(<App title= {title}/>);
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId("test-title").innerHTML).toContain(title);
        //const h1 = container.querySelector("h1");
        //expect(h1.textContent).toBe(title);
        // expect(h1.textContent).toContain(title);
    });
    test("debe de mostrar el subtitulo envaidado por props", () => {
        const title = 'Hola Mundo';
        const subTitle = 'Subtitulo';
        
        const { getByText, getAllByAltText } = render(<App title={title} subTitle={subTitle} />);
        //expect(getAllByAltText(subTitle).length).toBe(1);
        expect(getByText(subTitle)).toBeTruthy();
    }); 
});