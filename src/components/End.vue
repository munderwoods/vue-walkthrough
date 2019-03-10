<template>
  <div class="end">
    <img alt="Vue logo" src="../assets/logo.png" id="vue-logo">
    <br>
    <br>
    <button id="button2" @click="start('tour2')">Begin Part 2</button>
    <br>
    <a href="mailto:matthewsunderwood@gmail.com">matthewsunderwood@gmail.com</a>
    <a href="https://github.com/munderwoods/vue-walkthrough" target="_blank">GitHub Repo</a>
  </div>
</template>

<script>

export default {
  name: 'end',
  components: {
  }, 

  methods: {
    start(tour) {
      this.$eventBus.$emit('start_walkthrough', tour);
    },
  }
}
</script>

<style>
.end {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
