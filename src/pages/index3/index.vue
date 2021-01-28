<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-28 19:04:37
-->
<template>
  <view class="content">
    <view>{{ person.name }}</view>
    <view>{{ msg }}</view>

    <!-- 在标签上通过属性的方式来使用数据 -->
    <view :data-color="color">熊大</view>

    <view>==========</view>
    <view>
      <view v-for="(item, index) in list" :key="index">
        {{ index }}--{{ item.id }}--{{ item.text }}
      </view>
    </view>
    <view>==========</view>
    <view v-if="false">v-if</view>
    <view v-show="isShow">显示或隐藏</view>
    <view v-show="false">v-show</view>
    <view>==========</view>
    <view>￥{{ money }}</view>
    <view>{{ cnMoney }}</view>
    <view>==========</view>
    <view>
      <view v-for="(item, index) in filterList" :key="index">{{ item.id }}--{{ item.text }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      msg: "橙子好香阿",
      person: {
        name: "苏大强",
      },
      color: "aqua",
      list: [
        {
          id: "1",
          text: "橙子🍊",
        },
        {
          id: "2",
          text: "草莓🍓",
        },
        {
          id: "3",
          text: "香蕉🍌",
        },
      ],
      isShow: true,
      money: 10000,
    }
  },
  computed: {
    cnMoney() {
      return "￥" + this.money * 2
    },
    filterList() {
      return this.list.filter((v) => v.id <= 1)
    },
  },
}
</script>

<style lang="scss"></style>
