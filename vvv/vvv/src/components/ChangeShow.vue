<template>
    <div class = "changeShow">
        <button @click="clickShowChange" class = 'ButtonChangeMode'>
            <!-- 效果: {{currentMode.name || '列表'}} -->
            效果
        </button>
        <ul class = 'show_effect_ul' v-show="showChangeCase" >
            <li v-for="item in mode"
            :key="item.id"
            @click="selectMode(item)"
            :class = "{Show_mode: item.comp === currentMode.comp}"
            class = 'ButtonChangeMode'
            >{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ChangeShow',

    props:{
        // selectMode:{
        //     type:Function,
        // }
    },
    data(){
        return {
            showChangeCase:true,
            currentMode: {}
        }
    },
    
    computed: {
        ...mapState({
            mode: state => state.show.mode
        })
    },

    methods:{
        selectMode(item){
            this.currentMode = item;
            this.showChangeCase = false;
            this.$emit('selectMode',item);
        },
        
        clickShowChange(){
            this.showChangeCase = !this.showChangeCase;
        },
    },

    mounted(){
    }
}
</script>

<style lang="less" scoped>
.changeShow {
    position: fixed;
    top: 2rem;
    left: 2rem;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
}
.ButtonChangeMode{
    height: 2.6rem;
    width: 5rem;
    background: rgba(255,255,255,0.3);
    color:#eee;
    text-align: center;
    font: 0.9rem/2.6rem '';
    border:none;
}
.ButtonChangeMode:hover{
    background: rgba(255,255,255,.5);
    cursor: pointer;
}
.show_effect_ul{
    // display: flex;
    // justify-content:space-around;
    // font-size: 0.8rem;
    display: flex;
}
.Show_mode {
    background: rgba(255,255,255,0.5);
}
</style>