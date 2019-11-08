<template>
    <div class="Infor">
        <!-- <div class = 'infor_img_container'>
            <x-img :src = 'detail.name'/>
        </div> -->
        <div class = 'infor_form_container'>
            <x-form :detail = 'detail'/> 
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Infor",
        data(){
            return{
            }
        },
        props: {

        },
        computed: {
            ...mapState({
                picData: 'picData'
            }),
            detail() {
                return this.picData[this.$route.params.id]
            }
        },
        created(){
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped lang = "less">
    .infor {
        width: 100%;
        height: 100%;
    }


    .infor_img_container {
        margin: 0 auto;
        width: 60%;
        height: 500px;
        padding: 20px;
        border: 1px solid #333;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .infor_form_container {
        width: 40%;
        margin: 20px auto;
    }

</style>
