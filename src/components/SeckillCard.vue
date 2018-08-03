<template lang="jade">
  .seckill-card-wrap
    .seckill-card
      .poster(:style="{backgroundImage:poster}")
      .content
        .title {{card.name}}
        .time {{card.time}}
        .venue {{card.venue}}
        .price-wrap
          image(:src="line",class="line")
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
          margin-bottom: 10px;
          font-size: 16px;
          color: #262626;
        }
        .time,.venue{
          font-size: 12px;
          color: #95949d;
        }
        .line{
          height:1px;
          position:absolute;
          top:0;

        }
        .price-wrap{
          position: absolute;
          bottom: -3px;
          right: 12px;
          line-height: 30px;
          left: 12px;
          display: flex;
          justify-content: space-between;
          padding-top: 10px;
          border-top:1px dashed #efefef;

          .btn-remind{
            border-radius: 16.7px;
            width: 84px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
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
      line:'../../static/img/line.png'
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
