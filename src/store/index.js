import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: [{
    name: 'user',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '6',
    comment: '晚上过圣诞节'
  }, {
    name: 'Armin',
    avatar: 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460',
    date: '2017-03-16',
    totalTime: '24',
    comment: '3周年纪念日'
  }]
}

export default new Vuex.Store({
  state
})
