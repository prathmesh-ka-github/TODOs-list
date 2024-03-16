const express = require("express")
const cors = require("cors")
const app = express()

const pool = require('./db.js')

app.use(cors())
app.use(express.json())

//! Routes

// create a todo

app.post('/todos',async(req,res) => {
    try {
        console.log(req.body)
        let {dsc} = req.body
        const newTodo = await pool.query(
            "INSERT INTO todo(dsc) VALUES($1) RETURNING *",
            [dsc]
        )
        res.json(newTodo.rows[0])

        res.status(200)
    } catch (err) {
        console.error(err.message)
    }
})


// get all todo

    app.get('/todos', async(req, res) => {
        try {
            const allTodos = await pool.query("SELECT * FROM todo;")
            res.json(allTodos.rows)
        } catch (err) {
            console.error(err.message)
        }
    })





// get a todo
    app.get('/todos/:id', async(req, res) => {
        try {
            console.log(req.params)
            const {id} = req.params
            const todo = await pool.query("SELECT * FROM todo WHERE todoid = $1",[id])

            res.json(todo.rows[0])
        } catch (err) {
            console.error(err.message)
        }
    })

// update a todo

app.put("/todos/:id", async (req, res) => {
    try {
        let { id } = req.params
        let { dsc } = req.body
        const updateTodo = await pool.query("UPDATE todo SET dsc=$1 WHERE todoid = $2",[dsc , id])


        res.json("todo was updated!")

    } catch (err) {
        console.error(err.message)
    }
})




// delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todoid = $1",[id])

        res.json("Todo was deleted 🚮")
    } catch (err) {
        console.error(err.message)
    }
})



app.listen(5000, () => {
    console.log("server has started! at port 5000. http://localhost:5000")
})