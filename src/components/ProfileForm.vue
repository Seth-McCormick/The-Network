<template>
    <form class="row" action="">
        <div class="col-4">
            <label for="">Name</label>
            <input class="form-control" type="text" />
        </div>
        <div class="col-4">
            <label for="">Email</label>
            <input class="form-control" type="text" />
        </div>
        <div class="col-4">
            <label for="">LinkedIn</label>
            <input class="form-control" type="number" />
        </div>
        <div class="col-4">
            <label for="">GitHub</label>
            <input class="form-control" type="text" />
        </div>
        <div class="col-8">
            <label for="">Profile Image</label>
            <input class="form-control" type="text" />
        </div>
        <div class="col-8">
            <label for="">Class Year</label>
            <input class="form-control" type="text" />
        </div>
        <div class="col-8">
            <label for="">Graduated?</label>
            <input class="form-control" type="boolean" />
        </div>
        <div class="col-12">
            <label for="">Bio</label>
            <textarea class="form-control" cols="30" rows="5"></textarea>
        </div>

    </form>
</template>


<script>
export default {
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
</style>