import React from 'react';
import './App.css';

export default class App extends React.Component {
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
    // setTimeout(() => {this.setState({loading: false})}, 100);
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

    if(loading) {
return <div className="container"><h3>Loading</h3></div>
    }

    return (
      <div className="container">
        <h3>Add todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
        <TodoList todos={todos} delete={this.handleDelete}/>
      </div>
    );
  }
}

export class TodoList extends React.Component {
  render() {
    return this.props.todos.map((item, i) => (
      <li key={i}>
        {item}
        <button onClick={() => this.props.delete(i)}>Delete</button>
      </li>
    ));
  }
}
