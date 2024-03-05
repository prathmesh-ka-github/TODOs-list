import React, { Fragment, useState } from 'react';
import './edit.css'

const editTodo = ({todo}) => {

    const [dsc, setDescription] = useState(todo.dsc)
    // console.log(todo)
    // console.log(description)

    function Click() {
        console.log('stop clicking')
        var modal = document.getElementById(`id${todo.todoid}`)
        modal.classList.toggle('visible')
    }
    function Close() {
        var modal = document.getElementById(`id${todo.todoid}`)
        modal.classList.toggle('visible')
        console.log('closed')
    } 

    const updateDescription = async () => {
        try {
            const body = { dsc }
            const response = await fetch(`http://localhost:5000/todos/${todo.todoid}`,{
                method: 'PUT',
                headers: {"Content-Type":"application/json"},
                body : JSON.stringify(body)
            })
            
            console.log(body)
        } catch (err) {
            console.error(err.message)
        }
        window.location = '/'
    }
    
    return(
        <Fragment>
            <button className='edit-btn' onClick={Click} data-target={`id${todo.todoid}`}>Edit</button>

            <div className='modal-container' id={`id${todo.todoid}`}>
                <div className='modal' id={`id${todo.todoid}`}>
                    <div className='heading-modal'>
                        Edit Todo
                    </div>
                    <div className='inputs'>
                        <input value={dsc} onChange={e => setDescription(e.target.value)} className='input-edit-modal' type="text" name="edit" id="edit-input" />
                        <button onClick={ e => updateDescription(e)}  className='btn-edit-modal'>Edit</button>
                    </div>

                    <button onClick={Close} className='close'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path></svg>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default editTodo;