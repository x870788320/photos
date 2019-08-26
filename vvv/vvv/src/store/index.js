import Vue from 'vue'
import Vuex from 'vuex'
import home from './Home'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLogIn: false,
        picData:[]
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
        },
    },
    modules:{
        home
    }
})
