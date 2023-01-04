import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {

    const title = 'Hola, soy Natalia';
    const subtitle = 'Hola, soy un subtitulo';

    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, soy Natalia"', () => { 
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
         //screen.debug();
    })

    test('Debe de mostrar el titulo en un h1', () => { 
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)        
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );

        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});