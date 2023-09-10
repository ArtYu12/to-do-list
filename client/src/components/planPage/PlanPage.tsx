import React from 'react'
import styles from './PlanPage.module.css'
import List from './planPageComponents/List'

const PlanPage:React.FC<any> = ({header}) => {
    return(
        <div className={styles.planPage}>
            <h1 className={styles.h1}>{header}</h1>
            <List />
        </div>
        
    )
}

export default PlanPage