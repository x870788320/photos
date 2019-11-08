import ximg from "./public/ImgC"
import xform from "./public/FormC"

const Api = {
    install(Vue) {
        Vue.component('x-img', ximg);
        Vue.component('x-form', xform);
    }
}


export default Api