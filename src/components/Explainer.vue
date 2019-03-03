<template>
  <div class="explainer">
    <h1 id="welcome">Welcome</h1>
    <p>This is a demonstration of a walkthrough Vue component created by Matthew Underwood.</p>
    <p>This includes an alternate implementation for Safari. It will work, but it will not be as attractive.</p>
    <button @click="start">Begin Demonstration</button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  display: flex;
  width: fit-content;
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
