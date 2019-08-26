import axios from 'axios'
import router from '../router'



const toLogin = () => {
    router.replace({
        path:'/login',
        query:{
            msg:'aaa'
        }
    })
}

const errorHandle = (status, msg) => {
    switch (status) {
        case 404:
            toLogin()
            break;
        default:
            window.console.log(msg);
    }
}

let Axios =axios.create({
    baseURL:'',
    timeout: 1000 * 10,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    // headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }
})

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Axios.interceptors.request.use(
    config => {
        //在发送请求前作一些事
        config.data = JSON.stringify(config.data)
        if(config.method == 'post'){
            // let x = document.getElementById('saveImage').files[0];
            let formObj = new FormData();   //序列化  创建一个form对象
            formObj.append('file',x,x.name)
        }

        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
        //const token = store.state.token;
        //token && (config.headers.Authorization = token);
        return config
    },
    error => Promise.error(error)
)

Axios.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            window.console.log(response);
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
            window.console.log("请查看网络");
        }
    }
)

//以插件方式挂在原型
export default {install(Vue){Vue.prototype.$http = Axios}}
