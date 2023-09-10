const ProfileService = require("./ProfileService")

class ProfileController {
    async getAll(req,res) {
        try {
            const profiles = await ProfileService.getAll()
            return res.json(profiles)
        } catch (e) {
            res.status(500).json(e.message)
        } 
    }
    async getProfile(req,res) {
        try {
            const profile = await ProfileService.getProfile(req.params.id)
            return res.json(profile)
        } catch (e) {
            res.status(500).json(e.message)
        } 
    }
    async createProfile(req,res) {
        try {
            const profile = await ProfileService.createProfile(req.body,req.files.picture)
            return res.json(profile)
        } catch (e) {
            res.status(500).json(e.message)
        } 
    }
    async updateProfile(req,res) {
        try {
            const profile = await ProfileService.updateProfile(req.params.id,req.body)
            return res.json(profile)
        } catch (e) {
            res.status(500).json(e.message)
        } 
    }
    async deleteProfile(req,res) {
        try {
            const profile = await ProfileService.deleteProfile(req.params.id)
            return res.json(profile)
        } catch (e) {
            res.status(500).json(e.message)
        } 
    }
    async deleteAll(req,res) {
        try {
            const profiles = await ProfileService.deleteAll()
            return res.json(profiles)
        } catch (e) {
            res.status(500).json(e.message)
        } 
    }
}

module.exports = new ProfileController()