<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-28 19:26:10
-->
<template>
  <view class="content">
    <view data-index="11" @click="handleClick(1, $event)">点击我试试1</view>
    <view data-index="22" @click="handleClick(2, $event)">点击我试试2</view>
  </view>
</template>

<script>
export default {
  methods: {
    handleClick(index, event) {
      console.log(index)
      console.log(event)
      console.log(event.currentTarget.dataset.index) //获取到data-index属性里面的值
    },
  },
}
</script>

<style lang="scss"></style>
