import useTaskList from "./hook";

import { act, renderHook } from "@testing-library/react-hooks";

describe("useTaskList", () => {
  it("should add task", () => {
    const { result } = renderHook(useTaskList);

    expect(result.current.value).toBe("");
    expect(result.current.tasks).toHaveLength(0);

    act(() => {
      result.current.setValue("Task text");
    });

    expect(result.current.value).toBe("Task text");

    act(() => {
      result.current.addTask();
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0]).toHaveProperty("text", "Task text");
    expect(result.current.value).toBe("");
  });

  it("should edit task", () => {
    const { result } = renderHook(useTaskList);

    act(() => {
      result.current.editTask({ id: "1", text: "test" });
    });
  });

  it("should delete task", () => {
    const { result } = renderHook(useTaskList);

    act(() => {
      result.current.deleteTask({ id: "1", text: "test" });
    });
  });
});
