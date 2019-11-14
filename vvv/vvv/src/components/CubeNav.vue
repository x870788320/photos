<template>
    <div class="cube_container">
        <div class="cube" ref= 'cube' 
            style = "left:40%; top:0; transform: rotateX(0deg) rotateY(0deg)">
            <x-img v-for="item in navData"
            :key="item"
            :src="item.img"
            :imgWidth = imgWidth
            :imgHeight = imgWidth
            class = "imgS"
            :class="imgStyle[item.id -1]"
            @click.native="navToShow(item.name)" />
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
                speedX: Math.round(Math.random() * 5 ),
                speedY: Math.round(Math.random() * 5 ),
                speedRX: 1,
                speedRY: 2,
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
                console.log('aa')
                this.navClass = item;
                this.$router.push({
                    name:"show",
                    params:{
                        item:item
                    }
                })
            },

            cubeMove(){
                // this.$refs.cube.offsetLeft
                let timer = null;
                let moveWidth = document.body.clientWidth - this.$refs.cube.offsetWidth - 50
                let moveHeight = document.body.clientHeight - this.$refs.cube.offsetHeight -50
                clearInterval(timer);
                timer = setInterval(() => {
                    if(this.$refs.cube.offsetLeft < 0 ||  this.$refs.cube.offsetLeft > moveWidth){
                        this.speedX = -this.speedX
                    }
                    if(this.$refs.cube.offsetTop < -this.$refs.cube.parentNode.offsetTop ||  this.$refs.cube.offsetLeft > moveHeight){
                        this.speedY = -this.speedY
                    }
                    this.$refs.cube.style.left = this.$refs.cube.offsetLeft + this.speedX + 'px';
                    this.$refs.cube.style.top = this.$refs.cube.offsetTop + this.speedY +'px';
                    this.$refs.cube.style.transform = `rotateX(${speedRX++}deg) rotateY(${speedRY++}deg)`;
                }, 30)

            }
        },
        mounted(){
            console.log(this.$refs.cube.offsetHeight)
            console.log(document.body.clientHeight)
            // this.cubeMove()
        }
    }
</script>

<style scoped>
.cube_container{
    width: 100%;
    min-height: 20rem;
    perspective: 100rem;
    position: relative;
}

.cube{
    width: 16rem;
    height: 16rem;
    margin: 0 auto;
    /* transform: translateZ(-15rem) translateY(-2rem) rotateX(-15deg) rotateY(18deg) rotateZ(2deg); */
    transform-style: preserve-3d;
	transition: transform 1s cubic-bezier(0.32, 0.05, 0.35, 1.6);
    position: absolute;
}
.imgS{
    --border-color: #e70;
    position: absolute;
    transform: scale(.8 .8);
    box-shadow: 0 0 0.5rem #fff, 0 0 1.5rem var(--border-color), 0 0 3rem var(--border-color);
    cursor: pointer;
}
.img1{ transform: translateZ(8rem)}
.img2{ transform: translateZ(-8rem) rotateY(180deg)}
.img3{ transform: translateX(8rem) rotateY(-90deg)}
.img4{ transform: translateX(-8rem) rotateY(-90deg)}
.img5{ transform: translateY(8rem) rotateX(-90deg)}
.img6{ transform: translateY(-8rem) rotateX(90deg)} 
</style>
