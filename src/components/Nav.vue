<template>
  <div class="bar" id="navbar">
    <router-link class="link" id="home-link" to="/">Home</router-link>
    <router-link class="link" id="interactivity-link" to="interactivity">Interactivity</router-link>
    <router-link class="link" id="scroll-link" to="scroll">Scrolling</router-link>
    <router-link class="link" id="mutate-link" to="mutate">Mutation</router-link>
    <router-link class="link" id="end-link" to="End">End</router-link>
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
#navbar {
  height: 60px;
}

.bar {
  display: flex;
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  align-items: center;
}

.link {
  margin: 0 20px 0 20px; 
  display: flex;
  align-items: center;
}

a {
  color: #333;
  text-decoration: none;
  height: 40px;
}
</style>
