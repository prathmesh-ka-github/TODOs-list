import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './editTodo'

const listTodos = () => {

    const [todos, setTodos] = useState([]);

    //! DELETE FUNCTION
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            console.log(deleteTodo)
            setTodos(todos.filter(todo => todo.todoid !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, [])

    const crossTodo = async(id) => {
        try {
            let ele = document.getElementById(id)
            ele.classList.toggle("slashed");
            console.log(ele)

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <div className='list-todo'>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={4}>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.todoid}>
                                <td><input onClick={() => crossTodo(todo.todoid)} type="checkbox" name="chk-box" /></td>

                                <td id={todo.todoid} >{todo.dsc}</td>
                                <td> <div ><EditTodo todo={todo}/></div></td>
                                <td> <button className='delete-btn' onClick={() => deleteTodo(todo.todoid)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default listTodos;