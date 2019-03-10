<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="vue-logo">
    <h1 id="welcome">Welcome</h1>
    <p>This is a demonstration of a walkthrough Vue component created by Matthew Underwood.</p>
    <p>This site is not meant to be viewed on mobile.</p>
    <p>The walkthrough is intended to act like a guided tour through an application. I've used it to completely replace a "Guides" section in one of my apps. It's almost like having a support tech standing over the user's shoulder, telling them how to accomplish their goal.</p> 
    <p>The walkthroughs are structured as a parent component and two children. The parent is mostly a wrapper that takes in the JSON for your entire guide. The children are a persistent Callout component, which masks
    off everything other than the component each step is interested in, and a series of Step components. These are programmatically generated based on the Steps prop then iterated through. The Callout component determines the dimension of the element it's calling out and generates several SVG clip paths to cut a whole in the mask. This method negates the hassle of passing events through the mask, and allows the user to interact with the app normally. The walkthrough includes an alternate implementation for Safari. It will work, but it won't be as attractive.</p>
    <br>
    <button @click="start('tour')">Begin Demonstration</button>
    <br>
    <a href="mailto:matthewsunderwood@gmail.com">matthewsunderwood@gmail.com</a>
    <a href="https://github.com/munderwoods/vue-walkthrough" target="_blank">GitHub Repo</a>
  </div>
</template>

<script>

export default {
  name: 'home',
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
.home {
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
