import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'

Vue.prototype.$eventBus = new Vue();

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
]

const router = new VueRouter({
	routes
})

export const EventBus = new Vue();
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
