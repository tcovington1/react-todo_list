import React, { Component } from 'react';
import List from './components/todos/List'
import TodoList from './components/todos/TodoForm'
import TodoForm from './components/todos/TodoForm';
//logical component

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn React Router', complete: false },
    ]
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addTodo = (name) => {
    const {todos } = this.state
    const todo = { name , complete: false, id: this.getUniqId() }
    this.setState({ todos: [todo, ...todos] })
    //rest param
  }

  // renderTodos = () => {
  //   const { todos } = this.state
  //   //.map loops through the todos array
  //   return todos.map( todo => {
  //     return (
  //       <li key={todo.id}>{todo.name}</li>
  //       //key is a prop giving it an key value
  //     )
  //   })
  // }

  render () {
    const { todos } = this.state
    return (
      <div>
        <TodoForm addTodo={this.addTodo}/>
       <List name='Bucket List' items={ todos } />
       
      </div>
    )
  }
}


export default App;
