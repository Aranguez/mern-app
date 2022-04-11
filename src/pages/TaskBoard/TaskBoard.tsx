import { FC } from "react";

import Board from "components/Board";
import Input from "components/Input";

import { Itask, ItasksList } from "types/task.model";
import { BoardsType } from "types/board.model";

import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useTasks } from "context/tasks-reducer";

import { v4 as uuidv4 } from "uuid";
import { boards } from "data/boards";

const TaskBoard: FC = () => {
  const [{ tasks }, dispatch] = useTasks();

  // TODO: tratar de unificar todo en una sola función
  // ordena verticalmente
  const orderList = (
    tasks: ItasksList,
    boardName: BoardsType,
    startIndex: number,
    endIndex: number
  ) => {
    const result: ItasksList = tasks;
    const [removed] = result[boardName].splice(startIndex, 1); // removed task from board
    result[boardName].splice(endIndex, 0, removed); // move task to new position

    return result;
  };

  // ordena pasando tasks a diferentes boards
  const orderBoard = (
    list: ItasksList,
    fromIndex: number,
    toIndex: number,
    fromName: BoardsType,
    toName: BoardsType
  ) => {
    const sourceList = tasks[fromName];
    const destinationList = tasks[toName];

    const [removed] = sourceList.splice(fromIndex, 1);

    destinationList.splice(toIndex, 0, {
      ...removed,
      board: { ...removed.board, name: toName },
    });

    return {
      ...list,
      [fromName]: sourceList,
      [toName]: destinationList,
    };
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index !== destination.index
    ) {
      const orderedList = orderList(
        tasks,
        source.droppableId as BoardsType,
        source.index,
        destination.index
      );
      dispatch({ type: "REORDER", payload: orderedList });

      // setTasksList((prevTasks) => {
      //   // TODO: Mejorar parámetros
      //   return orderList(
      //     prevTasks,
      //     source.droppableId as BoardsType,
      //     source.index,
      //     destination.index
      //   );
      // });
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const orderedBoard = orderBoard(
        tasks,
        source.index,
        destination.index,
        source.droppableId as BoardsType,
        destination.droppableId as BoardsType
      );

      dispatch({ type: "REORDER", payload: orderedBoard });

      // dispatch({ type: 'ORDER_LIST', payload: reorderedList })
      // setTasksList((prevTasks) => {
      //   // TODO: Mejorar parámetros
      //   return orderBoard(
      //     prevTasks,
      //     source.index,
      //     destination.index,
      //     source.droppableId as BoardsType,
      //     destination.droppableId as BoardsType
      //   );
      // });
    }
  };

  const handleSubmit = (text: string) => {
    const newTask: Itask = {
      id: uuidv4(),
      text,
      board: boards[BoardsType.backlog],
    };

    dispatch({ type: "ADD", payload: newTask });
  };

  return (
    <Container>
      <h1>Taskboard</h1>

      <Input withPlus onSubmit={handleSubmit} />

      <Flex>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Board name={BoardsType.backlog} />
          <Board name={BoardsType.todo} />
          <Board name={BoardsType.doing} />
          <Board name={BoardsType.done} />
        </DragDropContext>
      </Flex>
    </Container>
  );
};

const Container = styled.div({
  width: "80%",
  maxWidth: 1600,
  margin: "0 auto",
});

const Flex = styled.div({
  display: "flex",
});

export default TaskBoard;
