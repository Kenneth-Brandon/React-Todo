import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  state = {
    todoList: list
  };

  addLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (event) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  componentDidMount() {
    // this.addLocalStorage();
    window.addEventListener("beforeunload", this.saveLocalStorage.bind(this));
  }

  addNewTodo = newTodoName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newTodoName, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return !todo.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
        </div>
        <div>
          <TodoForm addNewTodo={this.addNewTodo} />
        </div>
        <TodoList
          list={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
