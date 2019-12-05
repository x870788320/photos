<template>
    <div class = "ShowRotato"  ref="picShow">
        <ul class="ShowPicUl" ref="picShow_ul">
            <li v-for="(item, index) in picData"
            :key="item.id"
            class = "show_style"
            @click="showToInfor(index)"
            >
                {{item.id}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "ShowRotato",
        data(){
            return {
                params: null,
                page:1,
                count:10,
                showScroll: 0,
                gettingData: false,
                scrollT: 0
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
            ),

        },
        watch: {
            showScroll(newV) {
                let touchHeight = this.$refs['picShow_ul'].offsetHeight -this.$refs['picShow'].offsetHeight- 400;
                if(!this.gettingData && newV > touchHeight) {
                    this.page++;
                    this.getPic()
                }
            }
        },
        methods:{
            ...mapActions(['getPicData']),
            getPic(){     //往底层穿页码和条数  按需加载
                this.gettingData = true
                this.$http.get('/search/count', {
                    params:{
                        page: this.page,
                        count:this.count
                    }
                }).then((data) => {
                    // let state = JSON.parse(data.data)
                    console.log(data.data)
                    if( data.data.length == 0){
                        console.log('wo也是有底线的')
                        return
                    }
                    this.gettingData = false
                    this.getPicData(data.data)
                })
            },
            showToInfor(index){
                this.$router.push({
                    name:"infor",
                    params: {
                        id:index
                    }
                })
            },
            //节流停止滚轮100sm后触发
            throttle(method, context) {
                clearTimeout(method.tid)
                method.tid = setTimeout(() => {
                    method.call(context)
                }, 100)
            }
        },
        mounted(){
            const that = this
            this.picData.length === 0 && this.getPic()
            //必须加overflow:auto,height ref放在父组件  //必须用function需要拿到onscroll事件
            this.$refs['picShow'].onscroll = function() {
                that.throttle(() => {
                    that.showScroll = this.scrollTop
                }, this)
            }
        },
        activated() {
            //保留scroll位置
            this.$refs['picShow'].scrollTop = this.showScroll
        }
    }
</script>

<style scoped lang="less">
.ShowRotato{
    height: 100%;
    width: 100%;
    overflow: auto;
    .ShowPicUl{

        li{
            height: 200px;
        }
    }
}
</style>
