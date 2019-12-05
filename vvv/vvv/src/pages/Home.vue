<template>
    <div class="home">
        <div class = 'home_nav'>
            <Nav/>
        </div>
            <CubeNav/>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import Nav from '../components/Nav'
    export default {
        name: "Home",
        components:{
            'Nav': () => import('../components/Nav'),
            'CubeNav': () =>import('../components/CubeNav')
        },
        data(){
            return {
            }
        },
        computed:{
        },
        mounted(){
            // this.$http.get('/search/count').then( (data) => {
            //     console.log(data);
            // })
            // axios.get('localhost:8000/api/count').then( (data) => {
            //         console.log(data);
            //     })
            // console.log(this.$http)

            console.log('home'+this.$http);
        },
        methods:{
            jj(){
                this.$router.push('/login')
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
    border-top: 1px solid #000;
}
.home_nav{
    margin: 5rem 2rem;
}
</style>
