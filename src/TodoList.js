import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo => <li>{todo.id} - {todo.text}</li>)}
  </ul>
);

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
