<template>
  <div id="app">
    <div class="content" id="content">
      <img alt="Vue logo" src="./assets/logo.png" id="vue-logo">
      <Explainer/>
      <br>
      <input type="checkbox" id="checkbox">
    </div>
    <Tour/>
    <p class="bottom" id="bottom">#</p>
  </div>
</template>

<script>
import Explainer from './components/Explainer.vue'
import Tour from './components/Tour.vue'

export default {
  name: 'app',
  components: {
    Explainer,
    Tour
  }, 
	mounted() {
		window.addEventListener("keypress", e => {
			if(String.fromCharCode(e.keyCode) === "c") {
				this.$eventBus.$emit('c_pressed');
			}
		});
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin:0;
}

button {
  background: none;;
  border: 1px solid gray;;
  border-radius: 3px;
  margin: 1px;
  padding: 5px 10px;
  cursor: pointer;
	white-space: nowrap;
	height: 27px;
}

.bottom {
  position: fixed;
  bottom: 5px;
  left: 50%;
}
</style>
