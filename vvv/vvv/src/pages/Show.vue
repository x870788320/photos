<template>
    <div class = "Show">
        <changeShow @selectMode = 'selectMode'/>
        <!-- <ShowList :id = 'currentMode.id'/> -->
        <div class = 'mode_item'>
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Show",
        components: {
            // 'ShowRotato': () => import('../components/ShowRotato'),
            // 'ShowSwiper': () => import('../components/ShowSwiper'),
            // 'ShowList': () => import('../components/ShowList'),
            'changeShow': ()=> import('../components/ChangeShow')
        },
        data(){
            return {
                currentMode: {}
            }
        },
        created(){
            this.params = this.$route.params.item
        },
        computed:{
        },
        watch: {
            
        },
        methods:{
            selectMode(item){
                this.currentMode = item ;
                this.$router.push({
                    name: item.comp
                })
            }
        },
        mounted(){
            console.log(this.$route.name)
        }
    }
</script>

<style scoped lang="less">
.Show{
    height: 100%;
    width: 100%;
}
</style>
