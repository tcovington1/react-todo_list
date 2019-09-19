import React, { Component } from 'react';

class TodoForm extends Component {
  //need a state to hold users input
  state = { name: ''}

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.name)
    //can also clean this up with object destructuring
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state
    //instead of doing this.state.name every time
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        onChange={this.handleChange}
        required
        placeholder='add a todo'
        name='name'
        value={name}
        />
        
       
      </form>
    )
  }
}

export default TodoForm;