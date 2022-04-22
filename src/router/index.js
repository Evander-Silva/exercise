import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactPanel from '../views/ContactPanel.vue'
import AddContact from '../views/AddContact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contact-panel',
    component: ContactPanel
  },
  {
    path: '/add-contact',
    name: 'add-contact',
    component: AddContact
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
