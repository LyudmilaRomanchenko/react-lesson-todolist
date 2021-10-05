import { Component } from "react";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);

    this.props.addTodo(this.state.message);
    // console.log(this.props.addTodo);

    this.setState({ message: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}

export default TodoEditor;
