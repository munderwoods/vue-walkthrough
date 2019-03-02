import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$eventBus = new Vue();

export const EventBus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
