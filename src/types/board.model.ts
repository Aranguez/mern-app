export type Iboard = {
  id: string;
  name: BoardsType;
};

export type IBoardList = {
  [key: string]: Iboard[];
};

export enum BoardsType {
  backlog = "backlog",
  todo = "todo",
  doing = "doing",
  done = "done",
}
