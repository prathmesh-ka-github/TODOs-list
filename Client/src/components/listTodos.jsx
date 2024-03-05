import React, { Fragment, useEffect, useState } from 'react';

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
                                <td><input type="checkbox" name="chk-box" /></td>
                                <td>{todo.dsc}</td>
                                <td> <button id='edit-btn'>Edit</button></td>
                                <td> <button id='delete-btn' onClick={() => deleteTodo(todo.todoid)}>Delete</button></td>
                            </tr>
                        ))}

                        {/* 
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>I want to clean my car</td>
                            <td> Edit</td>
                            <td> delete</td>
                        </tr> 
                        */}

                    </tbody>
                </table>

            </div>
        </Fragment>
    )
}

export default listTodos;