import React from 'react';
import './Todo.css'

const Todo = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div onClick={() => { deleteTodo(todo.id) }} className="list" key={todo.id}>
                    <span >{todo.content}</span>
                    <span id="close">&times;</span>
                </div>
            )
        })
    ) : (
            <p>You don't have any todos</p>
        );

    return (
        <div >{todoList}
        </div>
    )
}

export default Todo