import React from "react";
import "./Todo.css";
import styled from "styled-components";

const StyledForm = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 20px;
  font-size: 3.5rem;
  font-family: "Sen", sans-serif;
  text-align: center;
  color: white;
`;

const StyledInput = styled.input`
  display: inline-flex;
  width: 100%;
  padding: 5px;
  font-size: 1.5rem;
  font-family: "Sen", sans-serif;
  text-align: center;
  box-sizing: border-box;

  &:placeholder {
    color: #007da3;
    opacity: 1;
  }
`;

const Button = styled.button`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Sen", sans-serif;
  text-align: center;
  color: white;
  padding: 5px 40px;
  background: transparent;
  cursor: pointer;
`;

const TodoForm = props => {
  return (
    <StyledForm>
      Add Items:
      <form onSubmit={props.addListItem}>
        <StyledInput
          type="text"
          name="inputText"
          placeholder="Are You New Here"
          value={props.inputText}
          onChange={props.handleChange}
        />
        <Button type="submit">Add Item</Button>
        <Button onClick={props.clearCompleted}>Clear Completed Items</Button>
      </form>
    </StyledForm>
  );
};

export default TodoForm;
