import React, { Fragment, useEffect, useState } from 'react';

const listTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData);
            // console.log(jsonData)
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
                            <tr>
                                <td><input type="checkbox" name="chk-box" /></td>
                                <td>{todo.dsc}</td>
                                <td> Edit</td>
                                <td> <button>Delete</button></td>
                            </tr>
                        ))}
{/* 
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>I want to clean my car</td>
                            <td> Edit</td>
                            <td> delete</td>
                        </tr> */}

                    </tbody>
                </table>

            </div>
        </Fragment>
    )
}

export default listTodos;