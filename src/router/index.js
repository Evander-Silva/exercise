import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactPanel from '../views/ContactPanel.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import SeeContact from '../views/SeeContact.vue'

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
    path: '/edit-contact',
    name: 'edit-contact',
    component: EditContact
  },
  {
    path: '/see-contact',
    name: 'see-contact',
    component: SeeContact
  },
]

const router = new VueRouter({
  routes
})

export default router
