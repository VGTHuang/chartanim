import Vue from 'vue'
import App from './App.vue'
import store from './app.store.js'
import commonComponents from './components/common';

Vue.config.productionTip = process.env.NODE_ENV === 'production'

for(var key in commonComponents) {
  Vue.component(key, commonComponents[key])
}

const app = new Vue({
  render: h => h(App),
  store,

}).$mount('#app')
