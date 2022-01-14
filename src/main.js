import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import store from './store.js'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter.js'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
