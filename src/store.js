import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    datas: null
  },
  actions: {
    async fetchDatas({commit}) {
      const response = await axios.get('https://covid19-japan-web-api.now.sh/api/v1/prefectures')
      commit('setDatas',response.data)
    }
  },
  mutations: {
    setDatas: (state, datas) => (state.datas = datas)
    }
  })

export default store

