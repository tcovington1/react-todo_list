import React, { Component } from 'react';
import List from './components/todos/List'

//logical component

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn React Router', complete: false },
    ]
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
       <List name='Bucket List' items={ todos } />
       
      </div>
    )
  }
}


export default App;
