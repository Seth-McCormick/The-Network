import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService {

    async getPosts() {
        const res = await api.get('api/posts')
        logger.log(res.data)
        AppState.posts = res.data.posts
        AppState.olderPage = res.data.older
        AppState.newerPage = res.data.newer


    }

    async getProfilePosts(profileId) {
        const res = await api.get(`api/posts?creatorId=${profileId}`)
        logger.log(res.data)
        AppState.profilePosts = res.data.posts
        AppState.profileNewerPage = res.data.newer
        AppState.profileOlderPage = res.data.older

    }

    async previousPage(pageNumber) {
        // AppState.posts = []
        const res = await api.get(`api/posts?page=${pageNumber}`)
        AppState.posts = res.data.posts
        AppState.olderPage = res.data.older
        AppState.currentPage = pageNumber
        logger.log(res.data.page)

    }
    async nextPage(pageNumber) {
        // AppState.posts = []
        const res = await api.get(`api/posts?page=${pageNumber}`)
        AppState.posts = res.data.posts
        AppState.newerPage = res.data.newer
        AppState.currentPage = pageNumber
        logger.log(res.data)

    }
    async profilePreviousPage(pageNumber, id) {
        AppState.posts = []
        const res = await api.get(`api/posts?creatorId=${id}&page=${pageNumber}`)
        AppState.profilePosts = res.data.posts
        AppState.profileOlderPage = res.data.older
        AppState.profileCurrentPage = pageNumber
        logger.log(res.data.page)

    }
    async profileNextPage(pageNumber, id) {
        AppState.posts = []
        const res = await api.get(`api/posts?creatorId=${id}&page=${pageNumber}`)
        AppState.profilePosts = res.data.posts
        AppState.profileNewerPage = res.data.newer
        AppState.profileCurrentPage = pageNumber
        logger.log(res.data)

    }

    async createPost(postData) {
        const res = await api.post('api/posts', postData)
        logger.log('post created', res.data)

    }

    likePost(id) {
        // debugger
        const res = api.post(`api/posts/${id}/like`)
        logger.log(res.data, 'liked post')
        // find index of post that i just posted in appstate
        // splice index and and replace w res.data

    }

    async deletePost(id) {
        const res = await api.delete('api/posts/' + id)
        logger.log('deleting post', res.data)


    }
}

export const postsService = new PostsService()