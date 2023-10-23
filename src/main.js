// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Main from './components/Main'
import About from './components/About'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
}).$mount('#app')

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
