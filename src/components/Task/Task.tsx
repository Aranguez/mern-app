import { FC, useState } from "react";

import Menu from "components/Menu";

import { Itask } from "types/task.model";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useTasks } from "context/tasks-reducer";
import Input from "components/Input";

type Props = {
  task: Itask;
  index: number;
};

const Task: FC<Props> = ({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [, dispatch] = useTasks();

  const handleEdit = (newText: string) => {
    dispatch({ type: "EDIT", payload: { ...task, text: newText } });
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => {
        return (
          <Wrapper {...draggableProps} {...dragHandleProps} ref={innerRef}>
            {isEditing ? (
              <Input onSubmit={handleEdit} />
            ) : (
              <span>{task.text}</span>
            )}
            <Menu task={task} onActiveEdit={() => setIsEditing(true)} />
          </Wrapper>
        );
      }}
    </Draggable>
  );
};

const Wrapper = styled.div({
  width: "100%",
  position: "relative",
  padding: "12px 8px",
  border: "1px solid #ccc",
  background: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
  borderRadius: 5,
});

export default Task;
