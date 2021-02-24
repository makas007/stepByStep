import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    myNotes: [],
  },
  getters: {
    allMyNotes(state){
        return state.myNotes
    }
    // allMyNotes: (state) => state.myNotes
  },
  mutations: {
    myMytation (state, payload){
      // state.myNotes = payload
      state.myNotes = [...state.myNotes, ...payload]
    },
    delMyTodo(state, payload){
      console.log(state);
      state.myNotes[payload.i].todos.splice(payload.index, 1)
    },
    delMyNote(state, payload){
      state.myNotes.splice(payload, 1)
    },
    testFunc(state, payload){
      console.log(state, payload);
    }
  },
  actions:{
    // my2Mytation(context) { 
    //   context.commit('myMutation')
    // }
    //  ______________ упрощение _______
    // myMytation( {commit}) { 
    //   commit('myMytation')
    // }
    myAsyncMutation({commit}, payload) {
      setTimeout(() => {
        commit('myMytation', payload)
      }, 3000);
    },
    delMyTodo(context, payload){
      setTimeout(() => {
        context.commit('delMyTodo', payload)
      }, 3000);
    },
    delMyNote({commit}, payload){
      setTimeout(() => {
        commit('delMyNote', payload)
      }, 2000);
    }
  }

})