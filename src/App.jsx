import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: '',
      loading: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate(last, prev) {
    if(prev.todos.length !== this.state.todos.length) {
      document.cookie = `todos=${JSON.stringify(this.state.todos)}`;
    }
  }

  componentDidMount() {
    let todos = document.cookie.split(" ").filter(item => item.indexOf("todos") !== -1)[0];
    try {
      const data = todos.split("=")[1];
      this.setState({todos: JSON.parse(data), loading: false});
    } catch(e) {
      this.setState({loading: false})
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.text.length > 0) {
      this.setState({
        todos: [this.state.text, ...this.state.todos],
        text: ''
      }, this.saveToCookie);
    }
  }

  handleDelete(i) {
    let new_todos = [...this.state.todos]
    new_todos.splice(i, 1);
    this.setState({todos: new_todos});
  }

  render() {
    const { todos, loading } = this.state;
    const scaled = document.location.href.indexOf('scaled') !== -1;

    if(loading) {
      return <div className="container"><h3>Loading</h3></div>
    }

    return (
      <div className={`container ${scaled ? 'scaled' : ''}`}>
        <h3>Simple todo app</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
        <TodoList todos={todos} delete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
