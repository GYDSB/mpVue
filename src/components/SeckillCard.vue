<template lang="jade">
  .seckill-card-wrap
    .seckill-card
      .poster(:style="{backgroundImage:poster}")
      .content
        .title {{card.name}}
        .time {{card.time}}
        .venue {{card.venue}}
        .price-wrap
          .price
            span.num 68
            span.qi 元
          .btn.btn-remind 提醒我

</template>
<style lang="less">
  .seckill-card-wrap{

    overflow: hidden;
    position: relative;
    width: 100%;
    margin-top: 20px;
    .seckill-card{
      padding-bottom: 12px;
      box-shadow: 0 1.7px 7.5px 0 rgba(0,0,0,0.08);
      border-radius: 4.2px;
      overflow: hidden;
      margin: 7.5px 15px;
      .poster{
        height: 109px;
        width: 100%;
        background-position:center top;
        background-size:cover;
        background-repeat:no-repeat;

      }
      .content{
        margin-top: 12px;
        padding: 0 12px;
        position: relative;
        padding-bottom: 49px;
        .title{
          margin-bottom: 12px;
          font-size: 16px;
          color: #262626;
        }
        .time,.venue{
          font-size: 12px;
          color: #95949d;
        }
        .price-wrap{
          position: absolute;
          bottom: -3px;
          right: 12px;
          line-height: 25px;
          left: 12px;
          display: flex;
          justify-content: space-between;
          .btn-remind{
            border-radius: 16.7px;
            width: 84px;
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            color: #fff;
            text-align: center;
            cursor: pointer;
            background: linear-gradient(135deg,rgba(254,199,54,1),rgba(255,128,6,1));
          }
          .num{
            color: #ff0c51;
            margin-right: 2px;
            font-size: 16px;
          }
          .qi{
            color: #95949d;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
<script>
  export default {
    props:{
      card:Object
    },
    data(){

    },
    methods:{

    },
    computed:{
      poster(){
        return `url(${this.card.poster})`
      }
    }
  }
</script>
