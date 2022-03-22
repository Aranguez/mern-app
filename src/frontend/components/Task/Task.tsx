import { FC } from "react";

import { Itask } from "types/task.model";

type Props = {
  task: Itask;
};

const Task: FC<Props> = ({ task }) => {
  return <li>{task.text}</li>;
};

export default Task;
