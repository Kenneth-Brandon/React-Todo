import React from "react";
import "./Todo.css";
import styled from "styled-components";

const StyledForm = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 50%;
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

const SearchForm = props => {
  return (
    <StyledForm>
      Search the List:
      <form onSubmit={props.searchItems}>
        <StyledInput
          type="text"
          name="searchText"
          placeholder="Lost...Search Here"
          value={props.searchText}
          onChange={props.handleChange}
        />
        <Button type="submit">Search</Button>
        <Button onClick={props.clearSearch}>Clear Search</Button>
      </form>
    </StyledForm>
  );
};

export default SearchForm;
