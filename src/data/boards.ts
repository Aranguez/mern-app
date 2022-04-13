import { BoardsType, Iboard } from "types/board.model";
import { v4 as uuidv4 } from "uuid";

export const boards: { [key: string]: Iboard } = {
  Todo: {
    id: uuidv4(),
    name: BoardsType.Todo,
  },
  InProgress: {
    id: uuidv4(),
    name: BoardsType.InProgress,
  },
  Completed: {
    id: uuidv4(),
    name: BoardsType.Completed,
  },
};
