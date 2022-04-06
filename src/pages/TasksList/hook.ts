import { useState } from "react";

import { Itask } from "../../types/task.model";
import { v4 as uuidv4 } from "uuid";

const useTaskList = () => {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [value, setValue] = useState("");

  const addTask = () => {
    const id = uuidv4();
    setTasks([...tasks, { id, text: value }]);
    setValue("");
  };

  const editTask = (task: Itask) => {
    console.log("edit", task);
  };

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
