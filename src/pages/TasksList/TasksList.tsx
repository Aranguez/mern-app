import { FC } from "react";

import useTaskList from "./hook";
import RenderList from "./shared/RenderList";

// feature

const TasksList: FC = () => {
  const { value, tasks, setValue, addTask } = useTaskList();

  return (
    <>
      <h3>Lista de Tareas</h3>

      {/* INPUT */}
      <input
        type="text"
        name="task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>

      {/* TASKS LIST */}
      <RenderList tasks={tasks} />
    </>
  );
};

export default TasksList;
