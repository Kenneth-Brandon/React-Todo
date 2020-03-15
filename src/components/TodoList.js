import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const StyledList = styled.div`
  font-family: "Sen", sans-serif;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Styledh1 = styled.h1`
  font-family: "Sen", sans-serif;
  font-size: 3rem;
  text-align: center;
`;

const TodoList = props => {
  return (
    <StyledList>
      <Styledh1>My TODO List!</Styledh1>
      {props.todoItems.map(todoItem => (
        <Todo
          key={todoItem.id}
          listItem={todoItem}
          markComplete={props.markComplete}
        />
      ))}
    </StyledList>
  );
};

export default TodoList;
