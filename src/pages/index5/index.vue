<!--
 * @Description: 组件的使用、父子组件的通信
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-28 20:24:25
-->
<template>
  <view class="content">
    <view>子组件传递过来的路径:{{ src }}</view>
    <img-border @srcChange="handleSrcChange"></img-border>
    <img-border @srcChange="handleSrcChange" :src="src1"></img-border>
    <img-border @srcChange="handleSrcChange" :src="src2"></img-border>
  </view>
</template>

<script>
import imgBorder from "@/components/img-border"
export default {
  components: {
    imgBorder,
  },
  data() {
    return {
      src: "",
      src1: "https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg",
      src2:
        "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-imgbed/5eee9b1b-d3aa-4b69-92ac-36c5abaccf36.jpeg",
    }
  },
  methods: {
    handleSrcChange(e) {
      this.src = e
    },
  },
}
</script>

<style lang="scss"></style>
