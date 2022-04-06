import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TasksList from "./TasksList";

const setup = () => {
  return render(<TasksList />);
};

it("should render component correctly", () => {
  const component = setup();
  expect(component).toBeTruthy();
});

it("should change input text", async () => {
  setup();

  const input = screen.getByRole("textbox", { name: "" });

  await userEvent.type(input, "task text example");

  expect(input).toHaveValue("task text example");
});
