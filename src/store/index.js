import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function getDataViaApi (path, cb, errorHandler, headerParams = {}) {
  const headerObject = { 'Cache-Control': 'no-cache' }
  axios.get(path, {
    headers: { ...headerObject, ...headerParams }
  })
  .then(res => res.data)
  .then(cb)
  .catch(errorHandler)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default new Vuex.Store({
  state: {
    name: 'Chirag'
  },
  mutations: {
    setName (state, value) {
      state.name = value
    }
  },
  actions: {
    updateName ({ commit }, data) {
      const pageNumber = getRandomInt(20) + 1
      getDataViaApi('https://gorest.co.in/public/v1/users?page=' + pageNumber, (response) => {
        const data = response.data
        const myData = data[getRandomInt(data.length)]
        commit('setName', myData.name)
      }, (errResponse) => {
        console.log('Error response', errResponse)
      })
    }
  },
  getters: {
    name (state) {
      return state.name || ''
    }
  },
  modules: {
  }
})
