<template>
    <div class="login">
        <div>
            <!--<file value = '选择'/>-->
            <input type="file" ref = 'headImg'>
        </div>
        <div class="loginUser">
            <input type="text" placeholder="user">
        </div>
        <div class="loginP">
            <input type="text" placeholder="passname">
        </div>
        <div class="loginLogin">
            <button @click="logIn">log in</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {

            }
        },
        computed: {
            arrddd () {

                return this.dd.split('、')
            }
        },
        mounted(){
            // console.log(this.arrdd)
            // this.arrdd = [... new Set(this.dd.split('、'))]
            // console.log(this.arrdd)

            // this.arree = [... new Set(this.eee.split(' '))]
            // console.log(this.arree)
        },
        methods:{
            logIn(){
                this.$store.dispatch('changeLoginState',true)
                console.log(this.$store.state.isLogIn)
            }
        }
    }
</script>

<style scoped>
    .login{

    }
    input{
        width: 260px;
        height:30px ;
        margin-bottom:15px;
        padding-left: 10px;
    }
    .loginUser{
    }
</style>
