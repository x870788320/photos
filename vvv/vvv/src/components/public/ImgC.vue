<template>
    <div id = "imgC" :style="containBck">
        <div :style = 'ImgBck' class="sss">
            <slot></slot>
        </div>
        <!--<div style="background: url('../assets/logo.png')"  class="ff"></div>-->
    </div>
</template>

<script>
    export default {
        name: "ImgC",
        props:{
            src:{
                type:String,
                required:true
            },
            imgWidth: {
                type:String,
                required: false,
                default: '100%'
            },
            imgHeight: {
                type:String,
                required: false,
                default: '100%'
            }
        },
        data(){
            return {
                noods:{
                    // background: "url(" + require("../../../assets/logo.png") + ") 0% 0% / cover"
                }
            }
        },
        computed:{
            ImgBck(){
                return {
                    // background: "url(" + require('../../../static/imgs/' + this.src ) + ") 0% 0% / cover",
                    background: `url(${require(`../../../static/imgs/${this.src}`)}) center center / contain no-repeat`,
                    // background: "url(" + require('../../../static/imgs/' + this.src ) + ") center center / contain no-repeat",
                    width: this.imgWidth,
                    height: this.imgHeight
                }
            },
            containBck(){
                return {
                    width: this.imgWidth,
                    height: this.imgHeight
                }
            }
        },
        mounted() {
            console.log(this.imgHeight)
        }
    }
</script>

<style scoped>
    /* #imgC {
        width: 100%;
        height: 100%;
    } */
/* .sss{
    width: 100%;
    height: 100%;
} */
</style>
