import { FC, useState } from "react";

import Task from "../../components/Task";

import { Itask } from "types/task.model";

import { v4 as uuidv4 } from "uuid";

const TasksList: FC = () => {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [value, setValue] = useState("");

  const addTask = () => {
    const id = uuidv4();
    setTasks([...tasks, { id, text: value }]);
  };

  return (
    <>
      <h3>Lista de Tareas</h3>

      <input
        type="text"
        name=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>

      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task}></Task>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
