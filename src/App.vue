<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import { profileService } from './services/ProfileService'
import { logger } from './utils/Logger'
import Pop from './utils/Pop'
import Login from './components/Login.vue'
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
      // async getProfile() {
      //   try {
      //     await profileService.getProfile();
      //   }
      //   catch (error) {
      //     logger.log(error);
      //     Pop.toast(error.message, 'error');
      //   }
      // }
    };
  },
  components: { Login }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
