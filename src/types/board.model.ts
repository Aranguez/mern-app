export type Iboard = {
  id: string;
  name: BoardsType;
};

export type IBoardList = {
  [key: string]: Iboard[];
};

export enum BoardsType {
  Todo = "Todo",
  InProgress = "In progress",
  Completed = "Completed",
}
