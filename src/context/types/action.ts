import { Itask, ItasksList } from "types/task.model";

export type Action =
  | {
      type: "REORDER";
      payload: ItasksList;
    }
  | {
      type: "ADD";
      payload: Itask;
    }
  | {
      type: "EDIT";
      payload: Itask;
    }
  | {
      type: "DUPLICATE";
      payload: Itask;
    }
  | {
      type: "REMOVE";
      payload: Itask;
    };
