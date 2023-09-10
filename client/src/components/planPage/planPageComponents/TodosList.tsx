import React from 'react'
import styles from './List.module.css'
import { Todo } from '../types/types';
import TodoItem from './TodoItem';

const ListOfTodos:React.FC<any> = ({todos,progress}) => {
    return (
        <>
            {todos.length > 0 && 
            <div className={styles.listOfWork}>
                {todos.map((todo:Todo) => <TodoItem todo={todo} progress={progress} key={todo._id}/>)}
            </div>}
        </>
    )
}

export default ListOfTodos