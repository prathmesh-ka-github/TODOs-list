import './App.css'
import InputTodo from './components/inputTodo'
import ListTodo from './components/listTodos'

function App() {

  return (
    <>

        <h1 className='heading'>// TODOS LIST</h1>
        <p className='subheading'>A simple CRUD application build with ReactJS for frontend, ExpressJS and NodeJS for Backend and Postgresql as Database.</p>

        <InputTodo/>
        <ListTodo/>
    </>
  )
}

export default App
