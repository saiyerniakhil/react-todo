import React, { useState } from 'react'
import './App.css'


const Todo = ({todo, index, completeTodo, removeTodo}) => {

    return (

        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through":""}}> 
            
            { todo.text } &nbsp;

            <button className="comp-rm-btn" onClick={()=>completeTodo(index)} > { todo.isCompleted?"Mark as Not Completed": "Mark as Completed" } </button>
            &nbsp;<button className="comp-rm-btn" onClick={()=>removeTodo(index)}>x</button>
        </div>
    )
}

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue("")
    }

    return (
        <>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={e => setValue(e.target.value)} value={value} className="input" placeholder="Press enter to submit"/>
                </form>
        </>
    )
}

const App = () => {

    const [todos,setTodos] = useState([
        
    ])  

    const addTodo = (text) => {
        const newTodos = [...todos,{ text }]
        setTodos(newTodos)
    }

    const completeTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
    }
    const removeTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    return (
        <div className="app">
            <div className="heading">Todo App</div>
            <div className="todo-list">  
                {
                    todos.map((item,index) => (
                        <Todo key={index}
                            index={index}
                            todo={item}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />
                ))}
            </div>
            <TodoForm addTodo={ addTodo }/>

        </div>
    )
}

export default App;