import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greetings";

describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
    //arrange
    render(<Greeting />);
    //act
    //nothing here

    //assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was not clicked', () => {
    render(<Greeting />);
    const outputEl = screen.getByText("good to see you", { exact: false });
    expect(outputEl).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    const outputEl = screen.getByText("Changed!");
    expect(outputEl).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    const outputEl = screen.queryByText("good to see you", { exact: false });
    expect(outputEl).toBeNull();
  });
});
