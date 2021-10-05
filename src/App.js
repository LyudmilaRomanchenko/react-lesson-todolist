// import logo from './logo.svg';
import "./App.css";
// import Counter from "./components/Counter/Counter";
// import DropDown from "./components/DropDown/DropDown";
// import ColorPicker f
// console.log(DropDown);
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import Input from "./components/Input/Input";
import React from "react";
import TodoList from "./components/TodoList/TodoList";
import todosInitial from "./components/TodoList/todos.json";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends React.Component {
  state = {
    todos: todosInitial,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const todos = this.state.todos;
    console.log(todos.length);
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.filter((todo) => todo.complited);
    return (
      <div className="App">
        {/* <Counter initualValue={100} />
        <DropDown />
        <ColorPicker options={colorPickerOptions} />
        <Input onSubmit={this.renderForm} /> */}
        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненых: {completedTodoCount.length}</p>
        </div>

        <TodoList todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
