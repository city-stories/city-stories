import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import HelloWorld from './HelloWorld';
import EventMap from './EventMap'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

let App = ({ todos }) => {
  const todolist = [];

  todos.forEach((todo) => {
    todolist.push(<Todo todo={todo} />);
  });

  return (
    <div className="wrapper">
      <EventMap />
    </div>
  );
};

App.propTypes = {
  todos: React.PropTypes.object.isRequired
};

App = connect(mapStateToProps)(App);

export default App;
