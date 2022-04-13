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
          <$Wrapper {...draggableProps} {...dragHandleProps} ref={innerRef}>
            {isEditing ? (
              <>
                <Input onSubmit={handleEdit} />
              </>
            ) : (
              <>
                <$Title>{task.text}</$Title>
              </>
            )}
            <Menu task={task} onActiveEdit={() => setIsEditing(true)} />
          </$Wrapper>
        );
      }}
    </Draggable>
  );
};

const $Wrapper = styled.div({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
  padding: "18px 16px",
  background: "#FFFFFF",
  boxShadow: "4px 4px 20px #E0E1EE",
  borderRadius: 10,
});

const $Title = styled.span({
  fontWeight: 600,
  fontSize: 16,
});

export default Task;
