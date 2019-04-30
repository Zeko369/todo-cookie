import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    const items = this.props.todos.map((item, i) => (
      <li key={i}>
        <button className="delete" onClick={() => this.props.delete(i)}>Delete</button>
        {item}
      </li>
    ));

    return (
      <ul>
        { items }
      </ul>
    );
  }
}
