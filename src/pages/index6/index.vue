<!--
 * @Description: 组件的使用、父子组件的通信
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-29 14:51:24
-->
<template>
  <view class="content">
    <my-form>
      <view>
        <input type="text" />
        <radio></radio>
        <checkbox></checkbox>
      </view>
    </my-form>
  </view>
</template>

<script>
import myForm from "@/components/my-form"
export default {
  components: {
    myForm,
  },
}
</script>

<style lang="scss"></style>
