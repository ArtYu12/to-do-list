const FilesService = require("../../Files/FilesService")
const Profile = require("../../Schemas/Profile")


class ProfileService {
    async getAll() {
        const profiles = await Profile.find()
        return profiles
    }
    async getProfile(id) {
        if(!id) {
            throw new Error('ID did not get')
        }
        const profile = await Profile.findById(id)
        return profile
    }
    async createProfile(profile,picture) {
        const fileName = FilesService.saveFile(picture)
        const profileNew = await Profile.create({...profile,file:fileName})
        return profileNew
    }
    async updateProfile(id,profile) {
        const profileNew = await Profile.findByIdAndUpdate(id,profile,{new:true})
        return profileNew
    }
    async deleteProfile(id) {
        if(!id) {
            throw new Error('ID did not get')
        }
        const profile = await Profile.findByIdAndDelete(id)
        return profile
    }
    async deleteAll() {
        const profile = await Profile.deleteMany()
        return profile
    }
}

module.exports = new ProfileService()