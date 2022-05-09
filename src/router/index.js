/* eslint-disable callback-return */
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/LandingView")
  },
  {
    path: "*",
    component: () => import("../views/error/Error404")
  },
]

const router = new VueRouter({
  mode: "history",
  // eslint-disable-next-line no-process-env
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
