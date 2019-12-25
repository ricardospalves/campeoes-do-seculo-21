import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import PageNotFound from '../views/PageNotFound.vue'
import state from '../store/state'

const DEFAULT_TITLE = state.appName
const TEAMS = state.teams

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

router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = `${to.meta.title} | ${DEFAULT_TITLE}`
  }

  else {
    document.title = DEFAULT_TITLE
  }

  next()
})

export default router
