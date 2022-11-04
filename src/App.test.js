import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and updates when click", () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions, and updates when checked", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // check checkbox - check that the button is disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // check checkbox again - check that the button is enabled again
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("checkbox disables button color is gray", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: "gray"});
  
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: "red"});
  
  fireEvent.click(colorButton);
  
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: "gray"});
  
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: "blue"});
});
