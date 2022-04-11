import { createContext, FC, useContext, useReducer } from "react";

import { tasks } from "data/tasks";
import { ItasksList } from "types/task.model";
import { Action } from "./types/action";

import { v4 as uuidv4 } from "uuid";

export type State = { tasks: ItasksList };
export type Dispatch = (action: Action) => void;

const StateContext = createContext<undefined | State>(undefined);
const DispatchContext = createContext<undefined | Dispatch>(undefined);

function useTasks(): [State, Dispatch] {
  const contextState = useContext(StateContext);
  const contextDispatch = useContext(DispatchContext);

  if (contextState === undefined || contextDispatch === undefined) {
    throw new Error("useTasksContext must be used within a Provider");
  }

  return [contextState, contextDispatch];
}

type ProviderProps = { state?: State };

const initialState: State = { tasks };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: State, { type, payload }: Action) => {
  // const task = type !== "REORDER" ? payload : null;
  const boardName = type !== "REORDER" ? payload.board.name : null;

  switch (type) {
    case "REORDER": {
      return {
        ...state,
        tasks: payload,
      };
    }
    case "ADD": {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [boardName]: [...state.tasks[boardName], payload],
        },
      };
    }
    case "EDIT": {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [boardName]: state.tasks[boardName].map((task) => {
            if (task.id === payload.id) {
              return { ...task, ...payload };
            }
            return task;
          }),
        },
      };
    }
    case "DUPLICATE": {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [boardName]: [
            ...state.tasks[boardName],
            { ...payload, id: uuidv4() },
          ],
        },
      };
    }
    case "REMOVE": {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [boardName]: state.tasks[boardName].filter(
            (t) => t.id !== payload.id
          ),
        },
      };
    }
  }
};

const TasksProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { TasksProvider, useTasks };
