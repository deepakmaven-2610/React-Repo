import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {         //test suits and we can have multiple suites
    test('renders hello world as a text', () => {
        //Arrange
        render(<Greeting/>);
    
        //Act
        //here nothing is there
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World');  //look for exact match and only pass if it finds Hello World
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('render "How are you" if button is not clicked', () => {
        render(<Greeting/>);

        const outputElement = screen.getByText('How are you', {exact: false});
        expect(outputElement).toBeInTheDocument();
    })

    test('renders "Changed" if the button was clciked', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputClickedElement = screen.getByText('Changed', {exact: false});
        expect(outputClickedElement).toBeInTheDocument();
    })

    test('does not render "How are you" if the button was cliked', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputClickedElement = screen.queryByText('How are you', {exact: false});
        expect(outputClickedElement).toBeNull();
    })
})
