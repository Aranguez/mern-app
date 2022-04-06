import { FC } from "react";

import Header from "./components/Header";
import TasksList from "./pages/TasksList";

// styles
import "./normalize.css";
import "./index.css";

import styled from "styled-components";

const App: FC = () => (
  <Container>
    <Header />
    <TasksList />
  </Container>
);

const Container = styled.div({
  width: "80%",
  maxWidth: 1600,
  margin: "0 auto",
});

export default App;
