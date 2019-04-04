import Vue from 'vue'
import App from './App.vue'
import store from './app.store.js'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VModal, { dialog: true })

new Vue({
  render: h => h(App),
  store,

}).$mount('#app')
