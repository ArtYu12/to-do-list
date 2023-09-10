import React from 'react'
import styles from './tablePage.module.css'
import Tables from './tablePageComponents/Tables/Tables'

const TablePage:React.FC<any> = ({header}) => {
    return (
        <div className={styles.tablePage}>
            <h1 className={styles.h1}>{header}</h1>
            <p className={styles.p}>You can create your table with your schedule for the days!</p>
            <Tables />
        </div>
    )
}

export default TablePage