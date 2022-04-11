import { BoardsType, Iboard } from "./board.model";

export type Itask = {
  id: string;
  text: string;
  board: Iboard;
};

export type ItasksList = {
  [key in BoardsType]: Itask[];
};
