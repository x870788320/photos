<template>
    <div class="cube_container">
        <div class="cube" ref= 'cube'>
            <x-img v-for="item in navData"
            :key="item"
            :src="item.img"
            :imgWidth = imgWidth
            :imgHeight = imgWidth
            class = "imgS"
            :class="imgStyle[item.id -1]"
            @click="navToShow"/>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import Nav from '../components/Nav'
    import { mapState } from 'vuex'
    export default {
        name: "CubeNav",
        components:{
        },
        data(){
            return {
                imgWidth: '13rem',
                imgStyle: ['img1','img2','img3','img4','img5','img6',],
                navClass: '',
                speed: Math.random() * 5 
            }
        },
        computed:{
            ...mapState({
                navData: state => state.home.navData
            })
        },
        mounted(){
            console.log('home'+this.$http);
        },
        methods:{
            navToShow(item){
                this.navClass = item;
                this.$router.push({
                    name:"show",
                    params:{
                        item:item
                    }
                })
            },
            cubeMove(){

            }
        },
        mounted(){
            console.log(this.speed)
        }
    }
</script>

<style scoped>
.cube_container{
    width: 100%;
    min-height: 20rem;
    perspective: 100rem;
}

.cube{
    width: 16rem;
    height: 16rem;
    margin: 10rem auto;
    transform: translateZ(-15rem) translateY(-2rem) rotateX(-15deg) rotateY(18deg) rotateZ(2deg);
    transform-style: preserve-3d;
	transition: transform 1s cubic-bezier(0.32, 0.05, 0.35, 1.6);
}
.imgS{
    --border-color: #e70;
    position: absolute;
    transform: scale(.8 .8);
    box-shadow: 0 0 0.5rem #fff, 0 0 1.5rem var(--border-color), 0 0 3rem var(--border-color);
}
.img1{ transform: translateZ(8rem)}
.img2{ transform: translateZ(-8rem) rotateY(180deg)}
.img3{ transform: translateX(8rem) rotateY(-90deg)}
.img4{ transform: translateX(-8rem) rotateY(-90deg)}
.img5{ transform: translateY(8rem) rotateX(-90deg)}
.img6{ transform: translateY(-8rem) rotateX(90deg)} 
</style>
