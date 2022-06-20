<template>


  <!-- <div class="col-md-2 bg-white elevation-3 ms-3"> hello
    <img src="" alt="">
    <h4>name</h4>
    <b>email</b>
    <b>linkedin</b>
    <b>resume</b>
  </div> -->
  .<div class="container-fluid">

    <div class="row justify-content-between">

      <div class="col-md-8 d-flex flex-column justify-content-center">
        <CreatePost />
        <Post v-for="p in posts" :key="p.id" :post="p" />
        <div class="col-12 d-flex justify-content-between">

          <i class="mdi mdi-arrow-left selectable" @click="previousPage(currentPage - 1)">
          </i>
          <i class="mdi mdi-arrow-right selectable" @click="nextPage(currentPage + 1)"></i>
        </div>
      </div>

      <div class="col-md-3 me-3">

        <WebLink v-for="w in weblinks" :key="w.tall" :weblink="w" />

      </div>
    </div>

  </div>


</template>

<script>
import { computed, onMounted } from 'vue'
import { webLinksService } from '../services/WebLinksService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import WebLink from '../components/WebLink.vue'
import { AppState } from '../AppState'
import Post from '../components/Post.vue'
import { postsService } from '../services/PostsService'
import { profileService } from '../services/ProfileService'
import CreatePost from '../components/CreatePost.vue'

export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {

        await webLinksService.getWebLink()
        await postsService.getPosts()
        // await profileService.getProfile()
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      olderPage: computed(() => AppState.olderPage),
      currentPage: computed(() => AppState.currentPage),
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts),
      weblinks: computed(() => AppState.weblinks),

      async nextPage(pageNumber) {
        try {
          await postsService.nextPage(pageNumber)
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }


      },
      async previousPage(pageNumber) {
        try {
          await postsService.previousPage(pageNumber)
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }


      }
    };
  },
  components: { WebLink, Post, CreatePost }
}
</script>

<style scoped lang="scss">
</style>
