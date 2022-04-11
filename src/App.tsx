import { FC } from "react";

import TaskBoard from "pages/TaskBoard";

// styles
import "./normalize.css";
import "./index.css";
import { TasksProvider } from "context/tasks-reducer";

const App: FC = () => {
  return (
    <TasksProvider>
      <TaskBoard />
    </TasksProvider>
  );
};

export default App;
