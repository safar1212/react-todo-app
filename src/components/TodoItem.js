import React, {useState, useEffect} from "react";
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"


// class TodoItem extends React.Component {

//     state = {
//         editing: false,
//       }

//       componentWillUnmount() {
//         console.log("Cleaning up...")
//       }

//       handleEditing = () => {
//         this.setState({
//           editing: true,
//         })
//       }

//       handleUpdatedDone = event => {
//         if (event.key === "Enter") {
//           this.setState({ editing: false })
//         }
//       }

//     render() {

//         const completedStyle = {
//             fontStyle: "italic",
//             color: "#595959",
//             opacity: 0.4,
//             textDecoration: "line-through",
//           }

//           const { completed, id, title } = this.props.todo

//           let viewMode = {}
//           let editMode = {}
          
//           if (this.state.editing) {
//             viewMode.display = "none"
//           } else {
//             editMode.display = "none"
//           }

//         // return (
//         //     <li className={styles.item}>
//         //       <input
//         //         type="checkbox"
//         //         className={styles.checkbox}
//         //         checked={this.props.todo.completed}
//         //         onChange={() => this.props.handleChangeProps(this.props.todo.id)}
//         //       />
//         //       <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
//         //         Delete
//         //       </button>
//         //       <span style={this.props.todo.completed ? completedStyle : null}/>
//         //       {this.props.todo.title}
//                 //   </span>
//         //     </li>
//         //   )
//         return (
//          <li className={styles.item}>
//             <div onDoubleClick={this.handleEditing} style={viewMode}>
//               <input
//                 type="checkbox"
//                 className={styles.checkbox}
//                 checked={completed}
//                 onChange={() => this.props.handleChangeProps(id)}
//               />
//               <button onClick={() => this.props.deleteTodoProps(id)}>
//                 Delete
//               </button>
//               <span style={completed ? completedStyle : null}>{title}</span>
//             </div>
//             <input type="text" style={editMode} className={styles.textInput} value={title} 
//             onChange={e => {this.props.setUpdate(e.target.value, id)}}
//             onKeyDown={this.handleUpdatedDone}/>
//          </li>
//           )
//     }

// }

const TodoItem = props => {
    const [editing, setEditing] = useState(false)
  
    const handleEditing = () => {
      setEditing(true)
    }
  
    const handleUpdatedDone = event => {
      if (event.key === "Enter") {
        setEditing(false)
      }
    }
  
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
  
    const { completed, id, title } = props.todo
  
    let viewMode = {}
    let editMode = {}
  
    if (editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    useEffect(() => {
        return () => {
          console.log("Cleaning up...")
        }
      }, [])
  
    return (
      <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
          />
          <button onClick={() => props.deleteTodoProps(id)}><FaTrash /></button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => {
            props.setUpdate(e.target.value, id)
          }}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    )
  }
  

{/*export to todoesList */}
export default TodoItem;