import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    NEW_CONTACT(state, contact){
      state.contacts.push(contact)
    },
    DELETE_CONTACT(state, contact){
      let id = state.contacts.indexOf(contact)
      state.contacts.splice(id, 1)
    },
    EDIT_CONTACT(state, contact){
      let id = state.contacts.indexOf(state.contacts.find(element => element.id == contact.id))
      state.contacts.splice(id, 1, contact)
    }
  },
  actions: {
    addContact({ commit }, contact){
      contact.id = Math.random();
      commit("NEW_CONTACT", contact);
    },
    deleteContact({ commit }, contact){
      commit("DELETE_CONTACT", contact);
    },
    editContact({ commit }, contact){
      commit("EDIT_CONTACT", contact);
    }
  }
})