/*
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-29 14:13:50
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//定义全局数据方法1，通过vue的原型来实现,在任何其他页面都可以访问
Vue.prototype.baseUrl = "www.baidu.com"

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
