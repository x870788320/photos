import Vue from "vue"
import Router from "vue-router"

// import Homse from "../pages/Home"
// import err from "../pages/Err"
// import Login from "../pages/Login"
// const Home = () => import ('../pages/Home')

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
            name: 'home',
            path: '/',
            component: () =>
                import ('../pages/Home')
        },
        {
            name: 'home',
            path: '/home',
            component: () =>
                import ('../pages/Home')
        },
        {
            name: "infor",
            path: "/infor",
            component: () =>
                import ('../pages/Infor')
        },
        {
            name: 'show',
            path: '/show',
            component: () =>
                import ('../pages/Show'),
            children: [{
                    path: '/',
                    name: 'showList',
                    component: () =>
                        import ('../components/ShowList.vue')
                },
                {
                    path: '/show/showSwiper',
                    name: 'showSwiper',
                    component: () =>
                        import ('../components/ShowSwiper.vue')
                },
                {
                    path: '/show/showRotato',
                    name: 'showRotato',
                    component: () =>
                        import ('../components/ShowRotato.vue')
                },
            ]
        },
        {
            name: 'login',
            path: '/login',
            component: () =>
                import ('../pages/Login')
        },
        {
            name: 'err',
            path: '/err',
            component: import ('../pages/Err')
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to);

    next((vm) => {
        console.log(vm.$emit())
    })
})

export default router