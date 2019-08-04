import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.text.length > 0) {
      const new_todo = {text: this.state.text, done: false};
      this.setState({
        todos: [...this.state.todos, new_todo],
        text: ''
      })
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleCheck(id) {
    console.log(id);
    let todos = [...this.state.todos];
    todos[id].done = !todos[id].done;
    console.log(todos);
    this.setState({todos})
  }

  render() {
    const {text, todos} = this.state;
    const mappedTodos = todos.map((item, i) =>
      <li onClick={() => this.handleCheck(i)} key={i} className={`${item.done ? 'is-done' : ''}`}>
        {item.text}
      </li>
    )

    const all = this.state.todos.length;
    const todo = this.state.todos.filter(item => !item.done).length;

    return (
      <React.Fragment>
        <div>
            <h2>
                Todo List
            </h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={text}/>
          <button>Submit</button>
        </form>
        <p className="task-counter">{`${todo} remaining out of ${all} tasks`}</p>
        <ul>
          { mappedTodos }
        </ul>
        <style>{`
            .is-done {
                text-decoration: line-through;
            }
        `}</style>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Hello name="Taylor" />,
//   document.getElementById('root')
// );

