<template>
    <div class="Infor">
        {{id}}
    </div>
</template>

<script>
    export default {
        name: "Infor",
        data(){
            return{
                id:null
            }
        },
        created(){
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped lang="less">

</style>
