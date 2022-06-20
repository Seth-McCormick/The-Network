<template>
    <div class="col-md-12">
        <img class="img-fluid m-2" :src="weblink.tall" alt="">
    </div>
</template>


<script>
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { webLinksService } from '../services/WebLinksService'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
    props: { weblink: { type: Object, required: true } },
    setup() {
        return {
        }
    }
}
</script>


<style lang="scss" scoped>
</style>