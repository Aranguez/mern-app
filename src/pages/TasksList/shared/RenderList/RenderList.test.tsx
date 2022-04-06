import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import { Itask } from "../../../../types/task.model";

import RenderList from "./RenderList";

const tasksMock: Itask[] = [
  {
    id: "1",
    text: "task 1",
  },
  {
    id: "2",
    text: "task 2",
  },
  {
    id: "3",
    text: "task 3",
  },
];

const setup = () => {
  return render(<RenderList tasks={tasksMock} />);
};

it("should render component correctly", () => {
  const component = setup();
  expect(component).toBeTruthy();
});
