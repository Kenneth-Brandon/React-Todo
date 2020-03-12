import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = event => {
    this.setState({ ...this.state, newTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ newTodo: "" });
    this.props.addNewTodo(this.state.newTodo);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="todo"
          value={this.state.newTodo}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
