import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFormulate from '@braid/vue-formulate'
import FormulateVueDatetimePlugin from '@cone2875/vue-formulate-datetime'
import 'vue-datetime/dist/vue-datetime.css'
Vue.config.productionTip = false

Vue.use(VueFormulate, {
  plugins: [ FormulateVueDatetimePlugin ]
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
