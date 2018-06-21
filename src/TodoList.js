import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.id} - {todo.text}
        <button onClick={() => removeTodo(todo.id)}>Remover</button>
      </li>
    ))}
    <button onClick={() => addTodo("Novo Todo")}>Adicionar</button>
  </Fragment>
);

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
