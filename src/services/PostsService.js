import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService {

    async getPosts() {
        const res = await api.get('api/posts')
        logger.log(res.data)
        AppState.posts = res.data.posts
        AppState.currentPage = res.data.older


    }

    async getProfilePosts(profileId) {
        const res = await api.get(`api/posts?creatorId=${profileId}`)
        logger.log(res.data)
        AppState.profilePosts = res.data.posts

    }

    async previousPage(pageNumber) {
        AppState.posts = []
        const res = await api.get(`api/posts?page=${pageNumber}`)
        AppState.posts = res.data.posts

        logger.log(res.data.page)

    }
    async nextPage(pageNumber) {
        AppState.posts = []
        const res = await api.get(`api/posts?page=${pageNumber}`)

        AppState.posts = res.data.posts
        logger.log(res.data)

    }

    async createPost(postData) {
        const res = await api.post('api/posts', postData)
        logger.log('post created', res.data)

    }

    likePost(id) {
        const res = api.post(`api/posts/${id}/like`)
        logger.log(res.data.posts)

    }

    async deletePost(id) {
        const res = await api.delete('api/posts/' + id)
        logger.log('deleting post', res.data)


    }
}

export const postsService = new PostsService()