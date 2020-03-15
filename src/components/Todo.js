import React from "react";
import "./Todo.css";
import styled from "styled-components";

const Styledh1 = styled.h1`
  font-family: "Sen", sans-serif;
  background-color: #007da3;
  width: 50%;
  text-align: center;
  margin: 4px 0;
  padding-left: 8px;
  cursor: pointer;
`;
const Todo = props => {
  return (
    <Styledh1
      onClick={() => props.markComplete(props.listItem.id)}
      className={`list-item ${
        props.listItem.completed ? "completed" : "incomplete"
      } ${props.listItem.display ? "displayed" : "hidden"}`}
    >
      {props.listItem.listItem}
    </Styledh1>
  );
};

export default Todo;
