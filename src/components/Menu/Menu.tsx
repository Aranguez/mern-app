import { FC, useRef, useState } from "react";

import { Itask } from "types/task.model";
import styled from "styled-components";

import { AnimatePresence, motion } from "framer-motion";
import { useTasks } from "context/tasks-reducer";
import { useClickOutside } from "utils/useClickOutside";

type Props = {
  task: Itask;
  onActiveEdit: () => void;
};

const Menu: FC<Props> = ({ task, onActiveEdit }) => {
  const [, dispatch] = useTasks();

  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggle}>...</button>
      <AnimatePresence>
        {isOpen && (
          <Dropdown
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            ref={menuRef}
          >
            <Item onClick={onActiveEdit}>Edit</Item>
            <Item
              onClick={() => dispatch({ type: "DUPLICATE", payload: task })}
            >
              Duplicate
            </Item>
            <Item onClick={() => dispatch({ type: "REMOVE", payload: task })}>
              Delete
            </Item>
          </Dropdown>
        )}
      </AnimatePresence>
    </>
  );
};

const Dropdown = styled.div({
  zIndex: 1,
  position: "absolute",
  right: -100,
  top: 12,
  width: 100,
});

const Item = styled.button({
  width: "100%",
  border: "none",
  backgroundColor: "#ddd",
  textAlign: "left",
  padding: "8px 12px",
  transition: "all .3s ease",
  ":hover": {
    background: "#ccc",
  },
});

export default Menu;
