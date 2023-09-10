import React, { useContext} from 'react'
import styles from './List.module.css'
import { Context } from '../context'

const TodoItem = ({todo,progress}) => {
    //@ts-ignore
    const {removeTodo,toggleTodo} = useContext(Context)
    const cls = ['title']
    if(todo.completed) {
        cls.push('completed')
    }
    return (
        <div className={styles.todo}>
                <div className={styles.todo_main}>
                    <div className={styles.checkbox}>
                        <label>
                                {todo.completed 
                                    ?  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <mask id="mask0_15_1187" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="30" height="30" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_15_1187)">
                                    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#1C1B1F"/>
                                    </g>
                                    </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                                    <mask id="mask0_9_30"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="30" height="30" fill="#D9D9D9"/>
                                                    </mask>
                                                    <g mask="url(#mask0_9_30)">
                                                    <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#1C1B1F"/>
                                                    </g>
                                </svg>}
                            
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)} disabled={!progress}/>
                        </label>
                        </div>
                    <div>
                        <b className={cls.join(' ')}>Your todo: {todo.title}</b>
                        <p className={styles.data}>Date: {todo.data}</p>
                    </div>
                </div>
                <button className={styles.button} onClick={() => removeTodo(todo._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_15_1180"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="30" height="30" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_15_1180)">
                            <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#1C1B1F"/>
                        </g>
                    </svg>
                </button>
        </div>
    )
}


export default TodoItem           