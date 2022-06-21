<template>



    <div class="col-10  elevation-3 ms-5">
        <img class="profile-img p-2" :src="account.picture" alt="">
        <div>
            <label for="" class="form-label"></label>
            <textarea class="form-control" placeholder="Add a Description..." rows="5"
                v-model="postData.body"></textarea>
        </div>
        <form class="form-control" action="" @submit.prevent="createPost">
            <div class="col-12 d-flex justify-content-between m-2">
                <input type="text" placeholder="Add Url..." v-model="postData.imgUrl">
                <button class="btn btn-success">Post</button>

            </div>
        </form>
    </div>


</template>


<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
    setup() {
        const postData = ref({})
        return {
            postData,
            account: computed(() => AppState.account),
            profile: computed(() => AppState.profile),

            async createPost() {
                try {
                    await postsService.createPost(postData.value)
                } catch (error) {
                    logger.log(error)
                    Pop.toast(error.message, 'error')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-img {
    height: 150px;
    width: 150px;
    border-radius: 50em;
}
</style>