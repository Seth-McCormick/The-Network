import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {

    async getProfile(id) {
        const res = await api.get('api/profiles/' + id)
        logger.log(res.data)
        AppState.profile = res.data
    }

    async editProfile(profileData) {
        const res = await api.put('account/', profileData)
        logger.log('profile updated', res.data)

    }
}


export const profileService = new ProfileService()