import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messagePlugin from './utils/message.plagin'
import Loader from "./components/app/Loader"
import tooltipDirective from './directives/tooltip.directive'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

firebase.initializeApp({
	apiKey: "AIzaSyA2T8VkVqu9FU8XMrkx92Vj0GwCSuDOnwk",
	authDomain: "vue-crm-a5b77.firebaseapp.com",
	projectId: "vue-crm-a5b77",
	storageBucket: "vue-crm-a5b77.appspot.com",
	messagingSenderId: "625223052678",
	appId: "1:625223052678:web:497a78998d1f2aa9561007",
	measurementId: "G-6HGE1GXGCP",
	databaseURL: "https://vue-crm-a5b77-default-rtdb.europe-west1.firebasedatabase.app"
})

let app

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})
