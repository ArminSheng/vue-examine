import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  photoOptions: {
    photoToCut: '',
    ratio: 1,
    handler: null
  },
  previewImg: null,
  totalTime: 3,
  list: [{
    name: 'user',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '1',
    comment: '晚上过圣诞节'
  }, {
    name: 'Armin',
    avatar: 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460',
    date: '2017-03-16',
    totalTime: '2',
    comment: '3周年纪念日'
  }]
}

export default new Vuex.Store({
  state,
  mutations: {
    save (state, payload) {
      state.list.push(payload)
      console.log(payload)
    },
    addTotalTime (state, payload) {
      state.totalTime += parseInt(payload)
    },
    decTotalTime (state, payload) {
      state.totalTime -= payload
    },
    deletePlan (state, idx) {
      state.list.splice(idx, 1)
    },
    addImgCrop (state, payload) {
      state.photoOptions = payload
    },
    previewImg (state, payload) {
      state.previewImg = payload
    }
  },
  actions: {
    save ({commit}, data) {
      commit('save', data)
    },
    addTotalTime ({commit}, data) {
      commit('addTotalTime', data)
    },
    decTotalTime ({commit}, data) {
      commit('decTotalTime', data)
    },
    deletePlan ({commit}, idx) {
      commit('deletePlan', idx)
    },
    addImgCrop ({commit}, payload) {
      commit('addImgCrop', payload)
    },
    previewImg ({commit}, payload) {
      commit('previewImg', payload)
    }
  }
})
