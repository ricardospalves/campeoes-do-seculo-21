import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import state from '../store/state'

const DEFAULT_TITLE = state.appName

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: DEFAULT_TITLE
    }
  },
  {
    path: '/:id',
    name: 'team',
    component: Team,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE

  next()
})

export default router
