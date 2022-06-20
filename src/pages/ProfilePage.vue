<template>
    <div class="container-fluid">

        <div class="row justify-content-center mt-4">
            <div class="col-md-8 bg-white elevation-3 ">
                <div class="bg-img" :style="`background-image: url(${profile.coverImg})`">
                    <img class="profile-img" :src="profile.picture" alt="">
                </div>
                <div class="text-center">
                    <h4 class="text-center">{{ profile.name }}</h4>
                    <div>
                        <b>{{ profile.email }} | {{ profile.linkedin }} | {{ profile.github }}</b>

                    </div>
                    <b> {{ profile.bio }} | {{ profile.class }} | {{ profile.graduated }}</b>

                </div>
                <div v-if="account.id == profile.id" class="d-flex justify-content-end m-3">
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modelId">Edit</button>
                    <!-- Button trigger modal -->
                    <!-- <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal"
                        data-bs-target="#modelId">
                        Launch
                    </button> -->

                    <!-- Modal -->
                    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Edit Your Profile</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ProfileForm />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProfilePosts v-for="pp in profilePosts" :key="pp.id" :profilePost="pp" />
        <div class="col-md-12 d-flex justify-content-center">
            <!-- <i class="mdi mdi-arrow-left me-5 selectable" @click="changePage(currentPage - 1)"></i>
            <i class="mdi mdi-arrow-right ms-5 selectable" @click="changePage(currentPage + 1)"></i> -->

        </div>
    </div>
    <WebLink v-for="w in weblinks" :key="w.tall" :weblink="w" />

</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { profileService } from '../services/ProfileService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import WebLink from '../components/WebLink.vue';
import { webLinksService } from '../services/WebLinksService';
import { postsService } from '../services/PostsService';
import Post from '../components/Post.vue';
import ProfilePosts from '../components/ProfilePosts.vue';
import ProfileForm from '../components/ProfileForm.vue';

export default {
    setup() {
        const route = useRoute();
        onMounted(async () => {
            try {

                await webLinksService.getWebLink()
                await profileService.getProfile(route.params.id)
                await postsService.getProfilePosts(route.params.id)

            }
            catch (error) {
                logger.log(error);
                Pop.toast(error.message, "error");
            }
        });
        return {
            account: computed(() => AppState.account),
            currentPage: computed(() => AppState.currentPage),
            profilePosts: computed(() => AppState.profilePosts),
            posts: computed(() => AppState.posts),
            weblinks: computed(() => AppState.weblinks),
            profile: computed(() => AppState.profile),

            // async changePage(pageNumber) {
            //     try {
            //         await postsService.changePage(pageNumber)
            //     } catch (error) {
            //         logger.log(error)
            //         Pop.toast(error.message, 'error')
            //     }


            // }
        };
    },
    components: { WebLink, Post, ProfilePosts, ProfileForm }
}
</script>


<style lang="scss" scoped>
.profile-img {
    height: 150px;
    width: 150px;
    border-radius: 50em;
}

.bg-img {
    height: 20vh;
    background-size: cover;
    background-position: center;
}
</style>