import { useReducer,useEffect,useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
const initialState=[
    // {
    //     id:new Date().getTime(),
    //     description:"Recolectar la piedra del alma",
    //     done:false
    // },
    // {
    //     id:new Date().getTime() * 3,
    //     description:"Recolectar la piedra de la fuerza",
    //     done:false
    // }
]
const init=()=>{
    return JSON.parse(localStorage.getItem('todos') ) || [];
}

const useTodo = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState,init)
    const [done,setDone]=useState(0)
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos || []))
        handleOrdernar(todos)
        handleContar()
       
    }, [todos])
    const handleOrdernar=(todos)=>{
        const action={
            type:'[TODO] sort',
            payload:todos
        }
        dispatchTodo(action)
    }
    const handleContar=()=>{
       const nuevoArreglo=todos.filter(todo=>todo.done!==true)
       setDone(nuevoArreglo.length)
    }
    const handleNewTODO=(todo)=>{
        const action={
            type:'[TODO] add Todo',
            payload:todo
        }
        dispatchTodo(action)
    }
    const handleDeleteTodo=(id)=>{
        const action={
            type:'[TODO] remove Todo',
            payload:id
        }
        dispatchTodo(action)
    }
    const handleToggleTodo=(id)=>{
        const action={
            type:'[TODO] Toggle Todo',
            payload:id
        }
        dispatchTodo(action)
    }
    return{
        todos,
        handleDeleteTodo,
        handleNewTODO,
        handleToggleTodo,
        done
    }
}

export default useTodo
