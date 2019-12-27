import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import PageNotFound from '../views/PageNotFound.vue'
import state from '../store/state'

const TEAMS = state.teams

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:id',
    name: 'team',
    component: Team,
    props: true,
    beforeEnter(to, from, next) {
      const team = TEAMS.find(team => team.id === to.params.id)

      if(team) {
        next()
      }

      else {
        next({
          name: 'pageNotFound'
        })
      }
    }
  },
  {
    path: '/404',
    name: 'pageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
