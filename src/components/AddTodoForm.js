import React, { Component } from 'react';
import { addTodo, updateText } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.text);
    this.props.addTodo(this.props.text);
    this.props.updateText('');
  };

  onChange = (e) => {
    this.props.updateText(e.target.value);
  };

  render() {
    return (
      <div>
        <p>Add a Todo:</p>
        <input value={this.props.text} type="text" onChange={this.onChange} />
        <button onClick={this.onFormSubmit}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { text: state.text };
};

export default connect(mapStateToProps, { addTodo, updateText })(AddTodoForm);
