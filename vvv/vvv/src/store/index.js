import Vue from 'vue'
import Vuex from 'vuex'
import home from './Home'
import show from './Show'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLogIn: false,
        picData:[],
        page: 1,
        count:10,
    },
    mutations:{
        changeLoginState(state, isLogin){
            state.isLogIn = isLogin
        },
        getPicData(state, picData){
            state.picData = state.picData.concat(picData)
        },
    },
    actions:{
        changeLoginState({commit}, isLogin){
            commit('changeLoginState', isLogin)
        },

        getPicData({commit},picData ) {
            commit('getPicData',picData)
            console.log(Vue.$router)
        },
    },
    modules:{
        home,
        show
    }
})
