<template>
 <div class = 'formC'>
   <div v-for="(value, key) in showList" :key="value" class = 'formc_row'>
    <div>{{key}} : </div>
    <div v-show='indexIsShow[key]' @click="indexEdit(key)">{{value}}</div>
    <div v-show="!indexIsShow[key]">
      <textarea name="" id="" cols="30" rows="10" value = value>
      </textarea>
    </div>
   </div>
  <!-- <div class = 'formc_row'>
    <div>id: </div>
    <div>1</div>
  </div>
  <div class = 'formc_row'>
    <div>name: </div>
    <div>aa</div>
  </div>
  <div class = 'formc_row'>
    <div>time:   </div>
    <div>aa</div>
  </div>
  <div class = 'formc_row'>
    <div >message:  </div>
    <textarea class="form_textarea"/>
  </div> -->
 </div>
</template>

<script>
 export default {
    name: 'Form',
    data () {
        return {
          showList: {},
          indexIsShow: {
            name: true,
            time: true,
            msg: true
          }
          // clickTextarea:['name','time']
        }
    },
    props: ['detail'],
    components: {
      
    },
    computed: {
      time() {
        let weekday = ['一','二','三','四','五','六','日'];
        let date = new Date();
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 星期${weekday[date.getDay() -1]} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      }
    },
    methods: {
      infoData() {
        Object.keys(this.detail).reduce((newData, key, index) => {
          let newKey = this.showList[index] || key
          newData[newKey] = this.props.detail[key]
          return newData
        }, {})
      },
      // textIsShow(key) {
      //   return  this.indexIsShow.indexOf(key) === 1   //判断数组中是否含有某个元素
      // },
      indexEdit( key ) {
        Object.keys(this.indexIsShow).map(item => {
          this.indexIsShow[item] = true
        })
        this.indexIsShow[key] = false
      }
    },
    created() {
      //item.split('/').pop().split('.')[0]
      this.showList.name = this.detail.name.split('.')[0]
      this.showList.time = this.time
      this.showList.msg = this.detail.msg
      // console.log(this.indexIsShow.indexOf('t')  === 1)
    }
 }
</script>

<style lang="less" scoped>
.formC {
  width: 100%;
  height: 100%; 
}
.formc_row { 
  width: 100%;
  line-height: 42px;
  display: flex;
}
.formc_row div:nth-child(1) {
  width: 30%;
}
.formc_row div:nth-child(2) {
  flex: 1;
  text-align: left;
  cursor: pointer;
}
.form_textarea {
  width: 70%;
  height: 100px;
}
</style>
