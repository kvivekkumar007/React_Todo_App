import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/stopwatch';
import Todo from './components/Todo/Todo';
import AddTodo from './components/Todo/AddTodo';


class App extends Component {


  state = {
    todos: [
      { content: 'Wake up early', id: 1 },
      { content: 'Start learning', id: 2 }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id != id;
    });
    this.setState({ todos: todos });
  }

  addTodo = (newTodo) => {

    newTodo.id = Math.random()
    const todos = [...this.state.todos, newTodo]
    this.setState({ todos });

  }


  render() {
    return (
      <div className="App">
        <h1 style={{ color: 'lightblue' }}>React Todo's App </h1>
        <br />
        {/* <Stopwatch/> */}
        <br />
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <br />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
