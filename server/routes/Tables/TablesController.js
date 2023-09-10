const TablesService = require("./TablesService")

class TablesController {
    async getTables(req,res) {
        try {
            let tables = await TablesService.getTables()
            return res.json(tables)
        } catch (e) {
            return res.status(500).json(e.message)  
        }
    }
    async createTable(req,res){
        try {
            let table = await TablesService.createTable(req.body)
            return res.json(table)
        } catch (e) {
            return res.status(500).json(e.message)  
        }
    }
    async deleteTables(req,res) {
        try {
            let tables = await TablesService.deleteTables()
            return res.json(tables)
        } catch (e) {
            return res.status(500).json(e.message)  
        }
    }
    async deleteTable(req,res) {
        try {
            let table = await TablesService.deleteTable(req.params.id)
            return res.json(table)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
    async getTable(req,res) {
        try {
            let table = await TablesService.getTable(req.params.id)
            return res.json(table)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
    async updateTable(req,res) {
        try {
            let table = await TablesService.updateTable(req.params.id,req.body)
            return res.json(table)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports = new TablesController()