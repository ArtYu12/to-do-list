const Tables = require('./../../Schemas/Tables')

class TablesService {
    async getTables() {
        const tables = await Tables.find()
        return tables
    }
    async getTable(id) {
        let table = await Tables.findById(id)
        if(table.tableData.days[0] !== 'ㅤ') {
            table.tableData.days.unshift('ㅤ')
        }
        return table
    }
    async createTable(table){
        const tableNew = await Tables.create({title:'Table',tableData:table})
        return tableNew
    }
    async deleteTables(){
        const tables = await Tables.deleteMany()
        return tables
    }
    async deleteTable(id){
        const table = await Tables.findByIdAndDelete(id)
        return table
    }
    async updateTable(id,table){
        const tableNew = await Tables.findByIdAndUpdate(id,table,{new:true})
        return tableNew
    }
}

module.exports = new TablesService()