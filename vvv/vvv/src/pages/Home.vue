<template>
    <div class="home">
        <x-img :src="src" class="imgB">
            {{ this.$store.state.home.name   }}
            <Nav/>
            <button @click="jj">+++</button>
        </x-img>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import Nav from '../components/Nav'
    export default {
        name: "Home",
        components:{
            'Nav': () => import('../components/Nav')
        },
        data(){
            return {
                src:'youtube.png'
            }
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
}
 .imgB{
     width: 300px;
     height: 300px;
 }
</style>
