import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
// import { Route, Routes, Link } from "react-router-dom";
// import About from "../pages/about";
// import NotMatch from "../pages/NotMatch";
// import Navbar from "./Navbar"



// class TodoContainer extends React.Component {
//     state = {
//         todos: []
//        };

//        componentDidMount() {
//         const temp = localStorage.getItem("todos")
//         const loadedTodos = JSON.parse(temp)
//         if (loadedTodos) {
//           this.setState({
//             todos: loadedTodos
//           })
//         }
//       }

//       componentDidUpdate(prevProps, prevState) {
//         if(prevState.todos !== this.state.todos) {
//           const temp = JSON.stringify(this.state.todos)
//           localStorage.setItem("todos", temp)
//         }
//       }

//       handleChange = (id) => {
//         this.setState(prevState => ({

//           todos: prevState.todos.map(todo => {
//             if (todo.id === id) {
//               return {
//                 ...todo,
//                 completed: !todo.completed,
//               }
//             }
//             return todo;
//           })

//         }));
//        }

//        delTodo = id => {
//         this.setState({
//           todos: [
//             ...this.state.todos.filter(todo => {
//               return todo.id !== id;
//             })
//           ]
//         })
//        }

//        addTodoItem = title => {
//         const newTodo = {
//           id: uuidv4(),
//           title: title,
//           completed: false
//         };
//         this.setState({
//           todos: [...this.state.todos, newTodo]
//         });
//       };

//       setUpdate = (updatedTitle, id) => {
//         this.setState({
//           todos: this.state.todos.map(todo => {
//             if (todo.id === id) {
//               todo.title = updatedTitle
//             }
//             return todo
//           }),
//         })
//       }

//   render() {
//     return (
//       <div className="container">
//       <div className="inner">
//         <Header />
//         <InputTodo addTodoProps={this.addTodoItem} />
//         <TodosList
//           todos={this.state.todos}
//           handleChangeProps={this.handleChange}
//           deleteTodoProps={this.delTodo}
//           setUpdate={this.setUpdate}
//         />
//       </div>
//     </div>
//     )
//   }
// }

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  // useEffect(() => {
  //   console.log("test run")

  //   // getting stored items
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <>
      
      {/* <Routes> */}
        
        {/* <Link exact path="/"> */}
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        {/* </Link>
        <Link path="/about"> */}
          {/* <About /> */}
        {/* </Link> */}
        {/* <Link path="*"> */}
          {/* <NotMatch /> */}
        {/* </Link> */}
      {/* </Routes> */}
    </>
  );
};
export default TodoContainer;
