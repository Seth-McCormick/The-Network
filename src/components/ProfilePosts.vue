<template>
    <div class="col-md-11 ms-5 bg-white elevation-3 m-3 ">
        <div class="col-md-12 d-flex justify-content-between px-3">
            <img class="img-fluid selectable profile-img p-2" :src="profilePost.creator.picture" alt="">
            <h4 class="">{{ profilePost.creator.name }} </h4>
            <p class="mb-0">{{ formatDate(profilePost.createdAt) }}</p>
            <i v-if="profilePost.creator.id == account.id" class="mdi mdi-close selectable" @click="deletePost"></i>
        </div>
        <div class="d-flex justify-content-center">

            <img v-if="profilePost.imgUrl" class="img-fluid post-img " :src="profilePost.imgUrl" alt="">
        </div>
        <div class="text-center">
            <p>{{ profilePost.body }}</p>
        </div>

    </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
    props: { profilePost: { type: Object, required: true } },
    setup(props) {
        return {
            account: computed(() => AppState.account),
            async deletePost() {
                try {
                    await postsService.deletePost(props.profilePost.id)
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
.post-img {
    height: 400px;
    width: 80%;
}

.profile-img {
    height: 150px;
    width: 150px;
    border-radius: 50em;
}
</style>