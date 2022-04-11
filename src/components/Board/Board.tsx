import { FC } from "react";

import Task from "components/Task";

import { Itask } from "types/task.model";

import { Droppable } from "react-beautiful-dnd";
import { BoardsType } from "types/board.model";
import { useTasks } from "context/tasks-reducer";

type Props = {
  name: BoardsType;
};

const Board: FC<Props> = ({ name }) => {
  const [{ tasks }] = useTasks();

  if (!tasks) return <></>;

  return (
    <div style={{ width: "200px", marginRight: "3rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{name}</div>
        <div>{tasks[BoardsType[name]].length}</div>
      </div>
      <hr />
      <Droppable droppableId={name}>
        {({ droppableProps, innerRef, placeholder }) => (
          <div {...droppableProps} ref={innerRef}>
            {tasks[BoardsType[name]].map((task: Itask, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
