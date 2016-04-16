import React from 'react';
import AddTodo from './AddTodo';
import HelloWorld from './HelloWorld';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

let App = ({ todos }) => {
  const todolist = [];

  todos.forEach((todo) => {
    todolist.push(<Todo todo="todo" />);
  });

  return (
    <div className="wrapper">
      <HelloWorld />
      <h2>Todos</h2>
      {todolist}
      <AddTodo />
    </div>
  );
};

App = connect(mapStateToProps)(App);

export default App;
