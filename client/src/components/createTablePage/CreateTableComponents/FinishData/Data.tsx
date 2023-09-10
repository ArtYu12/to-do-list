import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from '../FormCreateTable.module.css'
import { selectDays, selectItems } from '../../../../redux/createTable-selectors'
import {useNavigate} from 'react-router-dom'
import { createNewTable } from '../../../../redux/tables-reducer'
import { tableCreateActions } from '../../../../redux/createTable-reducer'

const Data = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector(selectItems)
    const days = useSelector(selectDays)


    const arrayOfDays:Array<string | number | undefined> = Array.from({ length: parseInt(days) }, (v, i) =>  i + 1);  
    const data = [] as Array<any>
    const arrayOfItemsStatus = [] as Array<string>

    useEffect(() => {
        for(let cn = 0; cn < items.length ;cn++) {
            data.push({ name:items[cn], status: arrayOfItemsStatus})
        }    
        for(let cnt1 = 1; cnt1 <= arrayOfDays.length ;cnt1++){
            arrayOfItemsStatus.push('-')
        }
    },[items,days])

    const removeItem = (value:string) => {
        dispatch(tableCreateActions.deleteItem(value))
    }
    const createTable = () => {
        if(parseInt(days) < 0 || parseInt(days) > 7 || items.length < 1)  return
        if(days[0] !== 'ㅤ') arrayOfDays.unshift('ㅤ')
        dispatch(createNewTable({items:items, days:arrayOfDays,data:data}))
        dispatch(tableCreateActions.deleteData())
        navigate('/tables')
    }
    return (
        <>
            <section className={styles.section}>
                <div className={styles.items}>
                    <b className={styles.b}>Your`s types:</b>
                    {items && <ol>
                        {items.map(item => <li className={styles.li} key={item} onClick={(e) => removeItem(e.currentTarget.innerHTML)}>{item}</li>)}
                    </ol>}
                </div>
                <div className={styles.days}>
                    <b className={styles.b}>Days: {days}</b>
                </div>
            </section>
            <input type="submit" value="Create" className={styles.inputs + ' ' + styles.submit} onClick={ () => createTable()}/>
        </>
    )
}

export default Data