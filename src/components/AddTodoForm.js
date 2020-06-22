import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends Component {
  state = { text: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <p>Add a Todo:</p>
        <input value={this.state.text} type="text" onChange={this.onChange} />
        <button onClick={this.onFormSubmit}>Add Todo</button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodoForm);
