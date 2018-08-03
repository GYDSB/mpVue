<template lang="jade">
  .tab-container
    .tab-item(:class="{selected:selected==index}",v-for="(tab,index) in tabs",
    @click="selectTab(index)",class="tab-item",:key="index")
      .time {{tab.time}}
      .status 已过期
    .tab-line(:style="{left:tabLineLeft}")
</template>
<style lang="less">
  .tab-container {
    display: flex;
    position: relative;
    .tab-item {
      width: 50px;
      padding: 0 20px;
      display: inline-block;
      text-align: center;
      &.selected{
        .time{
          transform: scale(1.2);
        }
      }
      .time {

      }
      .status {
        color: #666;
        font-size: 12px;
      }
    }
    .tab-line {
      position: absolute;
      height: 2px;
      width: 30px;
      background-color: #ff0c51;
      bottom: -10px;
      transition:left 0.1s ease;
    }
  }
</style>
<script>
  export default {
    props: {
      tabs: Array
    },
    data () {
      return {
        selected: 0
      }
    },
    methods: {
      statusText (tab) {
        let status = tab.status
        if (status == -1) return '已过期'
        else if (status == 0) return '预约中'
        else return '进行中'
      },
      selectTab(index){

        this.selected=index
        this.$emit('select',index)
      }

    },
    computed:{
      tabLineLeft(){

        return 30+90*this.selected+'px'
      }
    }
  }
</script>
