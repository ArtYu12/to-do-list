import React, { useState }  from 'react'
import {useDispatch} from 'react-redux'
import styles from '../FormCreateTable.module.css'
import { tableCreateActions } from '../../../../redux/createTable-reducer.ts'

const ItemsInput = () => {
    const [valueOfItem,setValueOfItem] = useState('')
    const dispatch = useDispatch()
    const addNewType = () => {
        if(valueOfItem === '') return
        dispatch(tableCreateActions.setNewItem(valueOfItem))
        setValueOfItem('')
    }
    return (
        <fieldset className={styles.fildset}>
            <legend className={styles.legend}>Types</legend> 
            <input type="text" required placeholder='Type' value={valueOfItem} onChange={(e) => setValueOfItem(e.currentTarget.value)} className={styles.inputs}/>
            <div className={styles.add} onClick={() => addNewType()}>ADD</div>
        </fieldset>
    )
}

export default ItemsInput