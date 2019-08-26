<template>
    <div class="nav">
        <ul class="navPic">
            <li v-for="(item) in navArr"
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

    export default {
        name: "Nav",
        data(){
            return{
                totalPage: 0,
                count: 10,
                page: 1,
                navClass:null,
                navArr:[
                    {
                        id: 1,
                        title:"BOY",
                        name:'boy'
                    },
                    {
                        id: 2,
                        title:"GIRL",
                        name:'girl'
                    },
                    {
                        id: 3,
                        title:"FAMILY",
                        name:'family'
                    },
                    {
                        id: 4,
                        title:"FA-MA",
                        name:'fa_ma'
                    },
                    {
                        id: 5,
                        title:"GRAND...",
                        name:'grand'
                    },
                    {
                        id: 6,
                        title:"OTHERS",
                        name:'others'
                    }
                ]
            }
        },
        computed:{
        },
        mounted(){
            // this.$store.dispatch("getPicData")
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
