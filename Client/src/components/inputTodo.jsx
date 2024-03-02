import React, { Fragment, useState } from "react";

const InputTodo = () => {
    
    const [dsc ,setDsc] = useState("")

    const onSubmitForm = async(e) => {
        e.preventDefault()
        if ({dsc}.dsc != "") {
            try {
                const body = {dsc}
                const response = await fetch("http://localhost:5000/todos", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                console.log(body)
            } catch (err) {
                console.error(err.message);
            }
        }
        else {
            console.warn("put something in the input!")
        }
        window.location = '/'
    }

    
    return (
        <Fragment>
            <form onSubmit={onSubmitForm}>
                <input placeholder="Write your task." className="input-text" type="text" name="input" value={dsc} onChange={(e) => {setDsc(e.target.value)}}/>
                <button className="input-btn">Add</button>
            </form>
        </Fragment>
    )
}
export default InputTodo;