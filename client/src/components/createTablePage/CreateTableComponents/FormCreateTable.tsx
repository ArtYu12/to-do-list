import React  from 'react'
import styles from './FormCreateTable.module.css'
import ItemsInput from './InputsForm/ItemsInput.tsx'
import DaysInput from './InputsForm/DaysInput.tsx'
import Data from './FinishData/Data.tsx'
import SubmitInput from './InputsForm/SubmitInput.tsx'

const FormCreateTable = () => {
    return (
        <div className={styles.formCreateTable}>
            <form className={styles.form}>
                <ItemsInput />
                <DaysInput />
            </form>
            <h2 className={styles.h2}>Finish data</h2>
            <Data />
        </div>
    )
}

export default FormCreateTable