import { FC } from "react";

import { Itask } from "../../types/task.model";

import styled from "styled-components";

type Props = {
  task: Itask;
  editFn: (elem: Itask) => void;
  deleteFn: (elem: Itask) => void;
};

const Task: FC<Props> = ({ task, editFn, deleteFn }) => {
  return (
    <ListItem>
      <Text>{task.text}</Text>
      <div>
        <Button onClick={() => editFn(task)}>Edit</Button>
        <Button $marginLeft onClick={() => deleteFn(task)}>
          Delete
        </Button>
      </div>
    </ListItem>
  );
};

const ListItem = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5;
  border: 1px solid #ccc;
  width: 200;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  color: black;
  font-size: 1.5rem;
`;

const Button = styled.button<{ $marginLeft?: boolean }>`
  margin-left: ${({ $marginLeft }) => ($marginLeft ? "20px" : "0px")};
  border: none;
  background-color: grey;
  border-radius: 5px;
  padding: 8px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: white;
  }
`;

export default Task;
