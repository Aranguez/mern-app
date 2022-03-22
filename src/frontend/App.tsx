import { FC } from "react";

import Header from "./components/Header";
import TasksList from "./pages/TasksList";

import "./index.scss";

const App: FC = () => (
  <div className="container">
    <Header />
    <TasksList />
  </div>
);

export default App;
