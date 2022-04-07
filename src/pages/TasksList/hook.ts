import { useState } from "react";

import { Itask } from "../../types/task.model";
import { v4 as uuidv4 } from "uuid";

/**
 * @description taskList custom hook
 * @author Leandro Aranguez
 */
const useTaskList = () => {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [value, setValue] = useState("");

  /**
   * @description add task to state.
   * @author Leandro Aranguez
   */
  const addTask = () => {
    const id = uuidv4();
    setTasks([...tasks, { id, text: value }]);
    setValue("");
  };

  /**
   * @description edit task
   * @param task
   * @author Leandro Aranguez
   */
  const editTask = (task: Itask) => {
    console.log("edit", task);
  };

  /**
   * @description delete task
   * @param task
   * @author Leandro Aranguez
   */
  const deleteTask = (task: Itask) => {
    console.log("delete", task);
  };

  return {
    addTask,
    editTask,
    deleteTask,
    tasks,
    value,
    setValue,
  };
};

export default useTaskList;
