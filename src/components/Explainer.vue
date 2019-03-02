<template>
  <div class="explainer">
    <h1 id="welcome">Welcome</h1>
    <p>This is a demonstration of a walkthrough Vue component created by Matthew Underwood.</p>
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
  width: fit-content;
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
