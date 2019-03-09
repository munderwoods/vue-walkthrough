<template>
  <div id="app">
    <div class="content" id="content">
      <Nav/>
      <img alt="Vue logo" src="./assets/logo.png" id="vue-logo">
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
      <Tour/>
      <Tour2/>
  </div>
</template>

<script>
import Tour from './components/Tour.vue'
import Tour2 from './components/Tour2.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Tour,
    Tour2,
    Nav
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(179, 219, 255);
}

h1 {
	margin: 30px;
  color: rgb(179, 219, 255);
}

p {
  color: rgb(179, 219, 255);
}

body {
  margin:0;
  overflow-y:scroll;
}

button {
  display: flex;
  width: fit-content;
  background: none;
  color:rgb(179, 219, 255);
  border: 2px solid rgb(179, 219, 255);
  border-radius: 4px;
  margin: 1px;
  padding: 5px 10px;
  cursor: pointer;
	white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
}

.content {
  display: flex;
  flex-direction: column;
  height: 300vh;
  padding-top: 100px;
  background-image: linear-gradient(#001f3f, #85144b);
  align-items: center;
}

.animation {
  width: fit-content;
  font-size: 16px;
}

.bottom {
  margin: auto auto 30px auto;
  width: fit-content;
}

::-webkit-scrollbar {
	width: 14px;
	height: 18px
}
::-webkit-scrollbar-thumb {
	height: 6px;
	border: 4px solid rgba(0, 0, 0, 0);
	background-clip: padding-box;
	-webkit-border-radius: 7px;
	background-color: rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}
::-webkit-scrollbar-button {
	width: 0;
	height: 0;
	display: none;
}
::-webkit-scrollbar-corner {
	background-color: transparent;
}
</style>
