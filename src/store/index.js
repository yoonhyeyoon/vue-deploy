import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todoList: [],
  },
  mutations: {
    CREATE_TODO: function (state, data) {
      state.todoList.push(data)
    },
    UPDATE_TODO: function (state, data) {
      state.todoList = state.todoList.map(todo => {
        if (todo == data) {
          const temp = {
            ...todo,
            isCompleted: !todo.isCompleted
          }
          return temp
        } else {
          return todo
        }
      })
    },
    DELETE_TODO: function (state, data) {
      const idx = state.todoList.indexOf(data)
      state.todoList.splice(idx, 1)
    }
  },
  actions: {
    createTodo: function ({ commit }, data) {
      commit('CREATE_TODO', data)
    },
    updateTodo: function ({ commit }, data) {
      commit('UPDATE_TODO', data)
    },
    deleteTodo: function ({ commit }, data) {
      commit('DELETE_TODO', data)
    }
  },
  getters: {
    allTodosCount: function (state) {
      return state.todoList.length
    },
    completedTodosCount: function (state) {
      return state.todoList.filter(todo => {
        return todo.isCompleted
      }).length
    },
    uncompletedTodosCount: function (state) {
      return state.todoList.filter(todo => {
        return !todo.isCompleted
      }).length
    }
  }
})
