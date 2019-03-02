<template>
  <div class="explainer">
    <h1 id="welcome">Welcome</h1>
    <p>This is a demonstration of a walkthrough Vue component created by Matthew Underwood. Walkthroughs can seemlessly lead into one another. If you want to direct someone to start a walkthrough from within another walkthrough you can do that. This includes an alternate implementation for Safari. It will work, but it will not be as attractive.</p>
    <p>Click the button below to start the demonstration.</p>
    <button @click="start">Click here to start</button>
  </div>
</template>

<script>
export default {
  name: 'explainer',
  props: {
  },

  methods: {
    start() {
      this.$eventBus.$emit('start_walkthrough', 'tour');
    }
  }

}
</script>

<style scoped>
.explainer {
  width: 60%;
  margin: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
