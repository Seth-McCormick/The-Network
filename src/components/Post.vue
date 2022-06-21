<template>
    <div class="col-md-12 bg-white elevation-3 m-3 ">
        <div class="col-md-12 d-flex justify-content-between px-3">
            <img class="img-fluid selectable profile-img p-2" :src="post.creator.picture" alt="" @click="goToProfile">
            <h4 class="">{{ post.creator.name }} </h4>
            <p class="mb-0">{{ formatDate(post.createdAt) }}</p>
            <i v-if="account.id == post.creator.id" class="mdi mdi-close selectable" @click="deletePost"></i>
        </div>
        <div class="d-flex justify-content-center">
            <img v-if="post.imgUrl" class="img-fluid post-img" :src="post.imgUrl" alt="">

        </div>
        <div class="d-flex justify-content-between px-5">
            <p>{{ post.body }}</p>
            <i><span class="mdi mdi-heart selectable" @click="likePost"></span> {{ post.likeIds.length }}</i>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    props: { post: { type: Object, required: true } },
    setup(props) {
        const router = useRouter();

        return {
            account: computed(() => AppState.account),
            goToProfile() {
                router.push({
                    name: "Profile",
                    params: { id: props.post.creatorId },
                })
            },

            likePost() {
                try {

                    postsService.likePost(props.post.id)
                } catch (error) {
                    Pop.toast(error.message, 'error')
                    logger.log(error)
                }
            },

            async deletePost() {
                try {
                    await postsService.deletePost(props.post.id)
                } catch (error) {
                    Pop.toast(error.message, 'error')
                    logger.log(error)
                }

            },

            formatDate(rawDate) {
                return new Date(rawDate).toLocaleDateString();
            },

        }
    }
}
</script>


<style lang="scss" scoped>
.profile-img {
    height: 100px;
    width: 100px;
    border-radius: 50em;
}

.post-img {
    height: 300px;
    width: 80%;

}
</style>