<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="vue-logo">
    <h1 id="welcome">Welcome</h1>
    <p>This is a demonstration of a walkthrough Vue component created by Matthew Underwood.</p>
    <p>This component includes an alternate implementation for Safari. It will work, but it won't be as attractive.</p>
    <a href="https://github.com/munderwoods/vue-walkthrough" target="_blank">GitHub Repo</a>
    <br>
    <button @click="start('tour')">Begin Demonstration</button>
    <br>
    <button id="button2" @click="start('tour2')">Begin Part 2</button>
    <br>
    <br>
    <br>
    <input type="checkbox" id="checkbox">
    <br>
    <br>
    <p class="animation" id="animation" @mouseover="animate">{{active ? "I'm quite a bit larger." : "I'm small."}}</p>
    <p class="bottom" id="bottom">Bottom</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }, 

  data() {
    return {
      active: false,
    }
  },

	mounted() {
		window.addEventListener("keypress", e => {
			if(String.fromCharCode(e.keyCode) === "c") {
				this.$eventBus.$emit('c_pressed');
			}
		});

	},

  methods: {
    animate() {
      this.active = !this.active;
    },

    start(tour) {
      this.$eventBus.$emit('start_walkthrough', tour);
    },

  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
