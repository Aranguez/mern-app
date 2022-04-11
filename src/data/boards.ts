import { BoardsType, Iboard } from "types/board.model";
import { v4 as uuidv4 } from "uuid";

export const boards: { [key: string]: Iboard } = {
  backlog: {
    id: uuidv4(),
    name: BoardsType.backlog,
  },
  todo: {
    id: uuidv4(),
    name: BoardsType.todo,
  },
  doing: {
    id: uuidv4(),
    name: BoardsType.doing,
  },
  done: {
    id: uuidv4(),
    name: BoardsType.done,
  },
};
