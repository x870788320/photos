<template>
    <div class = "Show">
        <ul class="ShowPicUl">
            <li v-for="(item) in picData"
            :key="item.id"
            class = "aaa"
            @click="showToInfor(item.id)"
            >
                {{item.id}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "Show",
        data(){
            return {
                params: null,
                page:1,
                count:10
            }
        },
        created(){
            this.params = this.$route.params.item
        },
        computed:{
            ...mapState(
                {
                    picData:'picData'
                }
            )
        },
        methods:{
            ...mapActions(['getPicData']),
            getPic(){     //往底层穿页码和条数  按需加载
                this.$http.get('/search/count', {
                    params:{
                        page: this.page,
                        count:this.count
                    }
                }).then((data) => {
                    // let state = JSON.parse(data.data)
                    console.log(data);
                    if( data.data.length == 0){
                        console.log('wo也是有底线的')
                    } else {
                        this.page++;
                        this.getPicData(data.data)
                    }
                })
            },
            showToInfor(id){
                this.$router.push({
                    name:"infor",
                    params: {
                        id:id
                    }
                })
            }
        },
        mounted(){
            this.getPic()
        }
    }
</script>

<style scoped lang="less">
.Show{
    .ShowPicUl{
        li{
            height: 200px;
        }
    }
}
</style>
