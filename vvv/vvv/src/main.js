import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from './sdk/Axios'
import store from './store'
// import './../theme/theme.less'

import Api from './components'
import '../index.css'

Vue.use(Api)
Vue.use(Axios)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')