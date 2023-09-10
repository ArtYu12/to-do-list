const TextService = require('./TextService');

class TextController {
    async getText (req,res) {
        try {
            const text = await TextService.getText()
            return res.json(text)
        }
        catch(e) {
            res.status(500).json(e.message)
        }
    }
    async addText (req,res) {
        try {
            const text = await TextService.addText(req.body)
            return res.json(text)
        }
        catch(e) {
            return res.status(500).json(e.message)
        }
    }
}


module.exports = new TextController()