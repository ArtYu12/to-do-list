import React  from 'react'
import styles from './CreateTableForm.module.css'
import FormCreateTable from './CreateTableComponents/FormCreateTable.tsx'
const CreateTableForm = (props) => {
    return (
        <div className={styles.createTablePage}>
            <h1 className={styles.h1}>{props.header}</h1>
            <FormCreateTable />
        </div>
    )
}

export default CreateTableForm