<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-29 14:20:32
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-29 15:08:47
-->
<template>
  <view class="form">
    <view class="form_title">标题</view>
    <view class="form_content">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default {
  //注意：无法在组件内使用onLoad，不会被执行
  onLoad() {
    console.log("myform onLoad")
  },
  //可以使用mounted
  mounted() {
    console.log("myform mounted 组件挂载完成")
  },
}
</script>
<style lang="scss"></style>
