import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // finds an element with a role button and with text 'Change to blue'
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);

  // finds an element with a role button and with text 'Change to blue'
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  // click button
  fireEvent.click(colorButton);

  // expect the background to change
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to change
  expect(colorButton.textContent).toBe("Change to Red");
});

test("initial conidtions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox works when clicked and disables the button when checked", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  // click checkbox and check it
  fireEvent.click(checkbox);

  // disabled button and checked checkbox
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // click checkbox and uncheck it
  fireEvent.click(checkbox);

  // enabled button and unchecked checkbox
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
