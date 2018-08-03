import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  // 这个字段走 page.json
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
