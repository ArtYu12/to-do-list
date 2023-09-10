import React, { useEffect }  from 'react'
import styles from './Tables.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectProgress, selectTables } from '../../../../redux/tables-selectors';
import {NavLink, useNavigate} from 'react-router-dom'
import { getTables, tableFullType } from 'redux/tables-reducer';
import { Preloader } from 'tools/Preloader';
import { actions } from 'redux/table-reducer';
import { v1 } from 'uuid';

const Tables = () => {
    const tables = useSelector(selectTables)
    const progress = useSelector(selectProgress)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTables())
        dispatch(actions.deleteTableData())
    },[])

    const createNewTable = () => {
        navigate('create-table')
    }

    if(!progress) {
        return <Preloader />
    }
    return (
        <div className={styles.tables}>
            <ul className={styles.ul}>
            {tables.length > 0 && tables[0] !== undefined &&
                tables.map((table:tableFullType) => 
                    <li className={styles.li} key={table._id}>
                        <NavLink to={`${table._id}`} className={styles.link}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    {table.tableData.days.map(day => <th key={day} className={styles.th}>{day}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {table.tableData.data.map((rowData,index) => {
                                    if(index === 2) {
                                        return (
                                            <div>Смотреть больше...</div>
                                        )
                                    } else if (index >= 3) {
                                        return
                                    }
                                    return (
                                        <tr key={v1()}> 
                                            <td className={styles.td+" "+styles.item}>{rowData.name}</td>
                                            {rowData.status.map((value) => {
                                                return <td key={v1()} className={styles.td+' '+styles.status}>{value === '-' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 66 42" fill="none">
                                                    <mask id="mask0_14_999" maskUnits="userSpaceOnUse" x="21" y="8" width="25" height="25">
                                                    <rect x="21.2538" y="8.5" width="24" height="24" fill="#D9D9D9"/>
                                                    </mask>
                                                    <g mask="url(#mask0_14_999)">
                                                    <path d="M26.2538 21.5V19.5H40.2538V21.5H26.2538Z" fill="#1C1B1F"/>
                                                    </g>
                                                </svg> : 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 66 42" fill="none">
                                                    <mask id="mask0_14_1027"  maskUnits="userSpaceOnUse" x="21" y="8" width="25" height="25">
                                                    <rect x="21.5" y="8.5" width="24" height="24" fill="#D9D9D9"/>
                                                    </mask>
                                                    <g mask="url(#mask0_14_1027)">
                                                    <path d="M31.05 26.5L25.35 20.8L26.775 19.375L31.05 23.65L40.225 14.475L41.65 15.9L31.05 26.5Z" fill="#1C1B1F"/>
                                                    </g>
                                                </svg>}
                                            </td>
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        </NavLink>
                    </li>
                )
            }
            
            <li className={styles.li} onClick={() => createNewTable()}><button className={styles.button}>+</button></li>
            </ul>
        </div>
    )
}
/*
<button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 42" fill="none">
                        <mask id="mask0_13_14"  maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="42">
                        <rect y="0.974358" width="40" height="41.0256" rx="5" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_13_14)">
                        <path d="M18.3333 28.3675C18.3333 29.288 19.0795 30.0342 20 30.0342C20.9205 30.0342 21.6667 29.288 21.6667 28.3675V26.5299C21.6667 24.689 23.159 23.1966 25 23.1966H26.6239C27.568 23.1966 28.3333 22.4313 28.3333 21.4872C28.3333 20.5431 27.568 19.7778 26.6239 19.7778H25C23.159 19.7778 21.6667 18.2854 21.6667 16.4444V14.6068C21.6667 13.6864 20.9205 12.9402 20 12.9402C19.0795 12.9402 18.3333 13.6864 18.3333 14.6068V16.4444C18.3333 18.2854 16.8409 19.7778 15 19.7778H13.3761C12.432 19.7778 11.6667 20.5431 11.6667 21.4872C11.6667 22.4313 12.432 23.1966 13.3761 23.1966H15C16.841 23.1966 18.3333 24.689 18.3333 26.5299V28.3675ZM8.33333 36.8718C7.41667 36.8718 6.63194 36.537 5.97917 35.8675C5.32639 35.198 5 34.3932 5 33.453V9.52137C5 8.58119 5.32639 7.77635 5.97917 7.10684C6.63194 6.43732 7.41667 6.10256 8.33333 6.10256H31.6667C32.5833 6.10256 33.3681 6.43732 34.0208 7.10684C34.6736 7.77635 35 8.58119 35 9.52137V33.453C35 34.3932 34.6736 35.198 34.0208 35.8675C33.3681 36.537 32.5833 36.8718 31.6667 36.8718H8.33333ZM8.33333 28.453C8.33333 31.2144 10.5719 33.453 13.3333 33.453H26.6667C29.4281 33.453 31.6667 31.2144 31.6667 28.453V14.5214C31.6667 11.7599 29.4281 9.52137 26.6667 9.52137H13.3333C10.5719 9.52137 8.33333 11.7599 8.33333 14.5214V28.453Z" fill="black"/>
                        </g>
                    </svg>
                </button>
                */
export default Tables