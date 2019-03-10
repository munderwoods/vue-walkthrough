import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Scroll from './components/Scroll.vue'
import Mutate from './components/Mutate.vue'
import Interactivity from './components/Interactivity.vue'
import End from './components/End.vue'

Vue.prototype.$eventBus = new Vue();

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/interactivity', component: Interactivity },
  { path: '/scroll', component: Scroll },
  { path: '/mutate', component: Mutate },
  { path: '/end', component: End },
]

const router = new VueRouter({
	routes
})

export const EventBus = new Vue();
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
