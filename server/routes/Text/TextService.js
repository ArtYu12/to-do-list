const Text = require("./../../Schemas/Text");

class TextService {
    async getText() {
        const text = await Text.find()
        return text
    }
    async addText(text) {
        const textCreated = await Text.create({...text})
        return textCreated
    }
}

module.exports = new TextService()
