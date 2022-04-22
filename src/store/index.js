import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [
      {
        id: '0',
        name: 'João da Silva',
        cellphone: '+55 (94) 9 9129 7564',
        email: 'joao_silva@email.com',
        photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '1',
        name: 'João da Silva',
        cellphone: '+55 (94) 9 9129 7564',
        email: 'joao_silva@email.com',
        photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
    ]
  },
  mutations: {
    NEW_CONTACT(state, contact){
      state.contacts.push(contact)
    },
    DELETE_CONTACT(state, contact){
      let id = state.contacts.indexOf(contact)
      state.contacts.splice(id, 1)
    }
  },
  actions: {
    addContact({ commit }, contact){
      contact.id = Math.random();
      commit("NEW_CONTACT", contact);
    },
    deleteContact({ commit }, contact){
      commit("DELETE_CONTACT", contact);
    }
  }
})