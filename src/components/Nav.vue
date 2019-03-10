<template>
  <div class="navbar" id="navbar">
    <div class="nav-item" id="home-link">
      <router-link class="nav-link" to="/">Home</router-link>
    </div>
    <div class="nav-item" id="interactivity-link">
      <router-link class="nav-link" to="interactivity">Interactivity</router-link>
    </div>
    <div class="nav-item" id="scroll-link">
      <router-link class="nav-link" to="scroll">Scrolling</router-link>
    </div>
    <div class="nav-item" id="mutate-link">
      <router-link class="nav-link" to="mutate">Mutation</router-link>
    </div>
    <div class="nav-item" id="end-link">
      <router-link class="nav-link" to="End">End</router-link>
    </div>
  </div>
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
}

.nav-item {
  margin-left: 20px;
  margin-right: 20px;
}

a {
  color: #333;
  text-decoration: none;
  height: 40px;
}
</style>
