<template lang="jade">
  view.container
    tab(:tabs="tabs",@select="onSelect")
    seckill-card(:card="card",v-if="card")
</template>


<script>

  import Tab from '@/components/tab'
  import SeckillCard from '@/components/SeckillCard'
  import request from '@/utils/request'

  export default {
    data () {
      return {
        card: null,
        motto: 'Hello World',
        userInfo: {},
        tabs: [{
          time: '08.03',
          status: -1,
          activity: {
            name: '2016-2017中国排球联赛',
            poster: 'http://7xllta.com1.z0.glb.clouddn.com/perform/project/1126/112605_n.jpg',
            time: '2018-08-06 19:00:00',
            venue: '上海大剧院'
          }
        }, {
          time: '08.04',
          status: 0,
          activity: {
            name: '等待戈多',
            poster: 'http://7xllta.com1.z0.glb.clouddn.com/poster/49f8edd9e60e86f25cd32ff9cd26c52518067e32.jpg',
            time: '2018-08-06 19:00:00',
            venue: '上海大剧院'
          }

        }, {
          time: '08.05',
          status: 0,
          activity: {
            name: '2016-2017中国排球联赛',
            poster: 'http://7xllta.com1.z0.glb.clouddn.com/perform/project/1126/112605_n.jpg',
            time: '2018-08-06 19:00:00',
            venue: '上海大剧院'
          }

        }]
      }
    },

    components: {
      SeckillCard, Tab
    },
    mounted () {
      console.log('hello world')
      this.onSelect()

    },
    methods: {
      onSelect (index) {
        this.card = this.tabs[index || 0].activity
        this.fetchPageData()
      },
      fetchPageData () {
        console.log('dddddd',request)
        request.get(`/v2/campaign/seckill?groupId=4`).then((res)=>{
          console.log(res)
        })
      }
    },

    created () {

    }
  }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128 rpx;
    height: 128 rpx;
    margin: 20 rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

</style>
