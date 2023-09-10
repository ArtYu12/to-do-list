import { tableFullType, tableType } from "redux/tables-reducer"
import { instanse } from "../api"


export const tablesAPI = {
    getTables() {
        return instanse.get('/tables')
    },
    
}

export const tableAPI = {
    createTable(table:tableType) {
        return instanse.post('/tables',table)
    },
    deleteTable(id:string) {
        return instanse.delete(`/tables/${id}`)
    },
    getTable(id:string) {
        return instanse.get(`/tables/${id}`)
    },
    updateTable(table:tableFullType) {
        return instanse.put(`/tables/${table._id}`,table)
    }
}