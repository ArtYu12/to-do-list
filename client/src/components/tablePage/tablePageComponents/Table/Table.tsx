import React, { useEffect}  from 'react'
import styles from './Table.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectTable } from '../../../../redux/table-selectors'
import { deleteTableById, tableFullType} from '../../../../redux/tables-reducer'
import {v1} from 'uuid'
import { actions, getTable, updateTable } from './../../../../redux/table-reducer'

const Table:React.FC = () => {
    const table:tableFullType = useSelector(selectTable)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {tableId} = useParams()
    
    useEffect(() => {
        dispatch(getTable(tableId))
    },[])

    const changeValue = (row:number,column:number,newValue:string) => {
        let updatedData = table.tableData.data.map((rowData:any, index:number) => {
            if (index === row) {
                let updatedStatus = [...rowData.status]; 
                if (newValue === "-") {
                    updatedStatus[column] = "+";
                } else if (newValue === "+") {
                    updatedStatus[column] = "-";
                }
                return {
                    ...rowData,
                    status: updatedStatus,
                };
            }
            return rowData;
        });
    
        const updatedTableData = {
            ...table.tableData,
            data: updatedData,
        };
    
        const updatedTable = {
            ...table,
            tableData: updatedTableData,
        };
        dispatch(updateTable(updatedTable));
    }


    const deleteTable = async (id:string) => {
        await dispatch(deleteTableById(id))
        navigate('/tables')
    }

    if(Object.keys(table).length === 0) return 
    return (
        <>
        <div className={styles.container}>
                <h2>{table.title}<span className={styles.bucket} onClick={() => deleteTable(table._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <mask id="mask0_15_1178"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                    <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_15_1178)">
                    <path d="M7 21.5C6.45 21.5 5.97917 21.3042 5.5875 20.9125C5.19583 20.5208 5 20.05 5 19.5V6.5H4V4.5H9V3.5H15V4.5H20V6.5H19V19.5C19 20.05 18.8042 20.5208 18.4125 20.9125C18.0208 21.3042 17.55 21.5 17 21.5H7ZM17 6.5H7V19.5H17V6.5ZM9 17.5H11V8.5H9V17.5ZM13 17.5H15V8.5H13V17.5Z" fill="#1C1B1F"/>
                    </g>
                    </svg>
                </span></h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {table.tableData.days.map(day => <th key={day} className={styles.th}>{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {table.tableData.data.map((rowData,indexRow) => {
                        return (
                            <tr key={v1()}> 
                                <td className={styles.td+" "+styles.item}>{rowData.name}</td>
                                {rowData.status.map((value,indexValue) => {
                                    return <td key={v1()} className={styles.td} onClick={() => changeValue(indexRow,indexValue,value)}>
                                        {value === '-' ?<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 66 42" fill="none">
                                            <mask id="mask0_14_999" maskUnits="userSpaceOnUse" x="21" y="8" width="25" height="25">
                                            <rect x="21.2538" y="8.5" width="45" height="45" fill="#D9D9D9"/>
                                            </mask>
                                            <g mask="url(#mask0_14_999)">
                                            <path d="M26.2538 21.5V19.5H40.2538V21.5H26.2538Z" fill="#1C1B1F"/>
                                            </g>
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 66 42" fill="none">
                                            <mask id="mask0_14_1027"  maskUnits="userSpaceOnUse" x="21" y="8" width="25" height="25">
                                            <rect x="21.5" y="8.5" width="45" height="45" fill="#D9D9D9"/>
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
        </div>
        </>
        
    )
}

export default Table