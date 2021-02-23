import Vue from 'vue';
import App from './App.vue'
import store from './store/index'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  Vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
