import Vue from 'vue';
import App from './App.vue'
import store from './store/index'
import Vuetify from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  Vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
