import { FC } from "react";

import Task from "components/Task";

import { Itask } from "types/task.model";

import { Droppable } from "react-beautiful-dnd";
import { BoardsType } from "types/board.model";
import { useTasks } from "context/tasks-reducer";
import styled from "styled-components";

import Dots from "assets/icons/dots.svg";

type Props = {
  name: BoardsType;
  color: string;
};

const Board: FC<Props> = ({ name, color }) => {
  const [{ tasks }] = useTasks();

  if (!tasks) return <></>;

  return (
    <$Wrapper>
      <$Header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <$ColoredDot $color={color} />
          <$Title>{name}</$Title>
        </div>
        <$DotsMenu src={Dots}></$DotsMenu>
      </$Header>
      <Droppable droppableId={name}>
        {({ droppableProps, innerRef, placeholder }) => (
          <div {...droppableProps} ref={innerRef}>
            {tasks[
              BoardsType[name === "In progress" ? "InProgress" : name]
            ].map((task: Itask, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {placeholder}
          </div>
        )}
      </Droppable>
    </$Wrapper>
  );
};

const $Wrapper = styled.div({
  marginRight: 30,
  padding: "24px 16px",
  width: 332,
  height: 600,
  left: 10,
  top: 10,
  background: "#F4F5F8",
  borderRadius: 10,
});

const $Header = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 23,
});

const $Title = styled.div({
  fontSize: 20,
  fontWeight: 600,
});

const $DotsMenu = styled.img({
  padding: 12,
});

const $ColoredDot = styled.div<{ $color: string }>(({ $color }) => ({
  width: 14,
  height: 14,
  backgroundColor: $color,
  borderRadius: "50%",
  marginRight: 10,
}));

export default Board;
