import React, { useState ,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './List.module.css'
import TodosList from './TodosList.tsx'
import { Context } from '../context.ts'
import { deleteTodo, getTodos, setTodo, updateTodo } from '../../../redux/plan-reducer.ts'
import { selectProgress, selectTodos } from '../../../redux/plan-selectors.ts'
import { Todo } from '../types/types'
import { Preloader } from '../../../tools/Preloader.tsx'

/*
    const [todos,setTodos] = useState([] as Array<Todo>)
    useEffect(() => {
        const row = localStorage.getItem('todos') || []
        //@ts-ignore
        setTodos(JSON.parse(row))
    },[])
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
    */

const List = () => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const [todoTitle,setTodoTitle] = useState('')
    const todos = useSelector(selectTodos)
    const progress = useSelector(selectProgress)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    },[dispatch])

    if(!progress) {
        return <Preloader />
    }
    const addTodo = (event:any) => {
        if(event.key === 'Enter' ||  event.target.type === "submit") {
            const newTodo = {
                title:todoTitle,
                data:new Date().toLocaleDateString("en-KZ",options),
                completed:false
            }
            dispatch(setTodo(newTodo))
            setTodoTitle('')
        }
    }
    const removeTodo = (id:number) => {
        dispatch(deleteTodo(id))
    }

    const toggleTodo = (todo:Todo) => {
        dispatch(updateTodo(todo))
    }

    return (
        <Context.Provider value={{removeTodo,toggleTodo}}>
        <div className={styles.list}>
            <div className={styles.form}>
                <input type="text" 
                    placeholder="Create a new plan on your list" 
                    value={todoTitle} 
                    onChange={(event) => setTodoTitle(event.target.value)} 
                    className={styles.searchInput+" "+styles.inputs}
                    onKeyDown={event => addTodo(event)}
                    />
                <input 
                    type="submit" 
                    className={styles.submit+" "+styles.inputs} 
                    value="ADD" 
                    onClick={event => addTodo(event)}
                    />
            </div>
            {todos && <TodosList todos={todos} progress={progress}/>}
        </div>
        </Context.Provider>
    )
}

export default List