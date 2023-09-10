import React, { useEffect, useState }  from 'react'
import {useDispatch} from 'react-redux'
import styles from '../FormCreateTable.module.css'
import { tableCreateActions } from '../../../../redux/createTable-reducer.ts'

const DaysInput = () => {
    const [valueOfDays,setValueOfDays] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(tableCreateActions.setDays(valueOfDays)) //Добавляет в state значение дней после изменения valueOfDays
    },[valueOfDays,dispatch])
    return (
        <fieldset className={styles.fildset}>
            <legend className={styles.legend}>Days</legend> 
            <input type="number" min="1" max="30" placeholder='Days' value={valueOfDays} onChange={(e) => {setValueOfDays(e.currentTarget.value)}} className={styles.inputs}/>
        </fieldset>
    )
}

export default DaysInput