<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-28 17:01:11
-->
<template>
  <view class="content">
    <view class="rpx">rpx</view>
    <view class="vw">vw</view>
    <view class="sass">sass</view>
  </view>
</template>

<script>
export default {}
</script>

<style lang="scss">
.rpx {
  /* rpx是小程序中的单位，750rpx=屏幕宽度 */
  width: 750rpx;
  height: 100px;
  background-color: aqua;
}
.vw {
  /* vw是h5单位，100vw=屏幕的宽度 ，100vh屏幕的高度 */
  width: 50vw;
  height: 100px;
  background-color: tan;
}
.content {
  .sass {
    height: 50vh;
    background-color: red;
    color: $uni-color-primary;
  }
}
</style>
