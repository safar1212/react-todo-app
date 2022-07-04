import React from "react";

class TodoItem extends React.Component {

    render() {
        return (
            <li>{this.props.todo.title}</li>
        )
    }

}

{/*export to toDoesList */}
export default TodoItem;