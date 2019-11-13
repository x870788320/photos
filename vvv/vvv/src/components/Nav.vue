<template>
    <div class="nav">
        <ul class="navPic">
            <li v-for="(item) in navData"
                :key="item.id"
                :class="{ navItem:item.name === navClass}"
                @click="navToShow(item.name)">
                {{item.title}}
            </li>
          <!--  <li v-for="(item,index) in arr "
                :class='{ bak:$route.name === item.name }'
                :key='index'
                @click="go(item,index)"
            >{{item.title}}
            </li>-->
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: "Nav",
        data(){
            return{
                totalPage: 0,
                count: 10,
                page: 1,
                navClass:null,
            }
        },
        computed:{
            ...mapState({
                navData: state => state.home.navData
            })
        },
        mounted(){
            // this.$store.dispatch("getPicData")
            console.log(this.navData)

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
            }
        }
    }
</script>

<style scoped lang="less">
.nav{
    .navPic{
        display: flex;
        flex-direction: row;
        justify-content: center;
        li{
            height: 80px;
            width: 300px;
            font: 20px/80px "";
            text-align: center;
            border-radius: 40px;
        }
        li:hover{
            background: linear-gradient(to bottom, #fff, #aaa);
            color:#fff;
            cursor: pointer;
            transition:all .4s cubic-bezier(0.4,0,0.2,1);
        }
        .navItem{
            background: aqua;
        }
    }
}
</style>
