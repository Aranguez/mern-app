import { FC } from "react";

import Board from "components/Board";
// import Input from "components/Input";

import { /*Itask,*/ ItasksList } from "types/task.model";
import { BoardsType } from "types/board.model";

import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useTasks } from "context/tasks-reducer";

// import { v4 as uuidv4 } from "uuid";
// import { boards } from "data/boards";
import Sidebar from "components/Sidebar";

import userImage from "assets/user.png";
import bell from "assets/icons/bell.svg";

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

  // const handleSubmit = (text: string) => {
  //   const newTask: Itask = {
  //     id: uuidv4(),
  //     text,
  //     board: boards[BoardsType.Todo],
  //   };

  //   dispatch({ type: "ADD", payload: newTask });
  // };

  return (
    <$Flex>
      <Sidebar />

      <$MainPanel>
        <div style={{ display: "inline-block" }}>
          <div style={{ display: "flex" }}>
            <$SearchInput
              type="text"
              name="input"
              id="input"
              placeholder="Buscar tarea"
            />
            <$IconWrapper>
              <img src={bell} alt="notification-bell-img" />
              <span></span>
            </$IconWrapper>
            <$ProfileImg></$ProfileImg>
          </div>

          <h1>Tareas Activas</h1>
          {/* <Input withPlus onSubmit={handleSubmit} /> */}

          <$Flex>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Board name={BoardsType.Todo} color="#3FD4DC" />
              <Board name={BoardsType.InProgress} color="#FF876C" />
              <Board name={BoardsType.Completed} color="#E169FF" />
            </DragDropContext>
          </$Flex>
        </div>
      </$MainPanel>
    </$Flex>
  );
};

const $Flex = styled.div({
  display: "flex",
});

const $MainPanel = styled.div({
  padding: 30,
});

const $SearchInput = styled.input({
  backgroundColor: "#F4F5F8",
  width: 574,
  height: 44,
  border: "2px solid #F4F5F8",
  padding: "12px 30px",
  borderRadius: 10,
  fontFamily: "Poppins",
  fontSize: 14,
  ":focus": {
    border: "2px solid #5D68FE",
    outline: "none",
  },
});

const $IconWrapper = styled.div({
  backgroundColor: "#F4F5F8",
  position: "relative",
  width: 45,
  height: 45,
  borderRadius: 10,
  padding: 14,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 30,
  "> span": {
    position: "absolute",
    top: 10,
    right: 10,
    width: 6,
    height: 6,
    backgroundColor: "#FF7070",
    borderRadius: "50%",
  },
});

const $ProfileImg = styled.div({
  width: 45,
  height: 45,
  borderRadius: 10,
  marginLeft: 10,
  backgroundImage: `url(${userImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
});

export default TaskBoard;
