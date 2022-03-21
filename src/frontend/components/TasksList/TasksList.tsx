import { FC } from "react";

import Task from "components/Task";

const TasksList: FC<any> = (tasks) => {
  return (
    <ul>
      {tasks.forEach((task: any) => (
        <Task>{task.name}</Task>
      ))}
    </ul>
  );
};

export default TasksList;
