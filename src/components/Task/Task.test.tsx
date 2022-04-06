import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Task from "./Task";

const deleteFnMock = jest.fn();
const editFnMock = jest.fn();

const taskMock = {
  id: "1",
  text: "test",
};

const setup = () => {
  return render(
    <Task deleteFn={deleteFnMock} editFn={editFnMock} task={taskMock} />
  );
};

describe("Task", () => {
  it("should have a text and buttons", async () => {
    setup();

    // get elements
    const text = screen.getByText("test");
    const editBtn = screen.getByRole("button", { name: /Edit/i });
    const deleteBtn = screen.getByRole("button", { name: /Delete/i });

    // expect elements to be in the document
    expect(text).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();

    // click edit button
    await userEvent.click(editBtn);

    // expect editFn to be called correctly
    expect(editFnMock).toBeCalled();
    expect(editFnMock).toBeCalledWith(taskMock);

    // click delete button
    await userEvent.click(deleteBtn);

    // expect deleteFn to be called correctly
    expect(deleteFnMock).toBeCalled();
    expect(deleteFnMock).toBeCalledWith(taskMock);
  });
});
