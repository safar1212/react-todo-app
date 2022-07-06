import React from "react"
import TodoItem from "./TodoItem";

// class TodosList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.todos.map(todo => (
//           <TodoItem key={todo.id} todo={todo} 
//           handleChangeProps={this.props.handleChangeProps}
//           deleteTodoProps={this.props.deleteTodoProps}
//           setUpdate={this.props.setUpdate} />
//         ))}
//       </ul>
//     )
//   }
// }

const TodosList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}

{/* export to TodoContainer*/}
export default TodosList 