<template>
    <form class="row" action="">
        <div class="col-4">
            <label for="">Name</label>
            <input class="form-control" type="text" v-model="profileData.name" />
        </div>
        <div class="col-4">
            <label for="">Email</label>
            <input class="form-control" type="text" v-model="profileData.email" />
        </div>
        <div class="col-4">
            <label for="">LinkedIn</label>
            <input class="form-control" type="text" v-model="profileData.linkedin" />
        </div>
        <div class="col-4">
            <label for="">GitHub</label>
            <input class="form-control" type="text" v-model="profileData.github" />
        </div>
        <div class="col-8">
            <label for="">Profile Image</label>
            <input class="form-control" type="text" v-model="profileData.picture" />
        </div>
        <div class="col-8">
            <label for="">Class Year</label>
            <input class="form-control" type="text" v-model="profileData.class" />
        </div>
        <div class="col-8">
            <label for="">Graduated?</label>
            <input class="form-control" type="boolean" v-model="profileData.graduated" />
        </div>
        <div class="col-12">
            <label for="">Bio</label>
            <textarea class="form-control" cols="30" rows="5" v-model="profileData.bio"></textarea>
        </div>
        <button type="button" class="btn btn-success mt-2" @click="editProfile">Confirm</button>
    </form>
</template>


<script>
import { ref, watchEffect } from 'vue'
import { profileService } from '../services/ProfileService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    props: { editProfile: { type: Object, required: true, default: {} } },
    setup(props) {
        const profileData = ref({});
        watchEffect(() => {
            profileData.value = props.editProfile
        })

        return {
            profileData,

            async editProfile() {
                try {
                    await profileService.editProfile(profileData.value);
                } catch (error) {
                    Pop.toast(error.message, "error");
                    logger.error(error);
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
</style>