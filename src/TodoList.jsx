import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return this.props.todos.map((item, i) => (
      <li key={i}>
        {item}
        <button className="delete" onClick={() => this.props.delete(i)}>Delete</button>
      </li>
    ));
  }
}
