import Vue from 'vue'
import App from './App.vue'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import routes from './routes'
import msTomm from './filters/ms-to-mm'
import blur from './directives/blur'

Vue.config.productionTip = false

Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(msTomm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
