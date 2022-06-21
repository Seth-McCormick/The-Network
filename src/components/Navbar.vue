<template>


  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center text-dark">
        <h1>The Network</h1>
      </div>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarText">
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>

</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
