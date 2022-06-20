import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class WebLinksService {

    async getWebLink() {
        const res = await api.get('api/ads')
        logger.log('got ads', res.data)
        AppState.weblinks = res.data

    }

}


export const webLinksService = new WebLinksService()