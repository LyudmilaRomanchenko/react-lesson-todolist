import React from "react";
import s from "./TodoList.module.css";

class TodoList extends React.Component {
  render() {
    console.log(this.props.todos);
    // const { id } = this.props.todos;
    //   <p>jjjjjj</p>;
    return (
      <ul>
        {this.props.todos.map(({ id, text }) => (
          <li key={id} className={s.TodoListItem}>
            <p>{text}</p>
            <button type="button" onClick={() => this.props.deleteTodo(id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }

  //   return (
  //     <ul>
  //       {todos.map(({ id, text }) => (
  //         <li key={id}>
  //           <p>{text}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
}

export default TodoList;
