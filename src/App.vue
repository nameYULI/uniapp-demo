<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-29 15:05:06
-->
<script>
export default {
  onLaunch: function() {
    console.log("App Launch 应用启动")
  },
  onShow: function() {
    console.log("App Show")
  },
  onHide: function() {
    console.log("App Hide")
  },
  //定义全局数据方法2
  globalData: {
    base: "uyuli.com",
  },
}
</script>

<style>
/*每个页面公共css */
</style>
