<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light" id="navbar">
    <ul class="navbar-nav">
      <li class="nav-item" id="home-link">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item" id="interactivity-link">
        <router-link class="nav-link" to="interactivity">Interactivity</router-link>
      </li>
      <li class="nav-item" id="scroll-link">
        <router-link class="nav-link" to="scroll">Scrolling</router-link>
      </li>
      <li class="nav-item" id="mutate-link">
        <router-link class="nav-link" to="mutate">Mutation</router-link>
      </li>
      <li class="nav-item" id="end-link">
        <router-link class="nav-link" to="End">End</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [],
  components: { },

  data() {
    return {
    }
  },

};
</script>

<style scoped>

.navbar {
  position: fixed !important;
  top: 0;
  width: 100% !important;
}

.nav-item {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
