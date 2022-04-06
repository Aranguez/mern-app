import { FC } from "react";

import Task from "../../../../components/Task";
import { Itask } from "types/task.model";
import useTaskList from "../../../../pages/TasksList/hook";

type Props = {
  tasks: Itask[];
};

const RenderList: FC<Props> = ({ tasks }) => {
  const { editTask, deleteTask } = useTaskList();

  return (
    <>
      {tasks.map((task: Itask) => (
        <Task
          key={task.id}
          task={task}
          editFn={editTask}
          deleteFn={deleteTask}
        />
      ))}
    </>
  );
};

export default RenderList;
