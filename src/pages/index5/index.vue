<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 15:55:35
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-28 19:53:28
-->
<template>
  <view class="content">
    <img-border></img-border>
    <img-border :src="src1"></img-border>
    <img-border :src="src2"></img-border>
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
      src1: "https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg",
      src2:
        "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-imgbed/5eee9b1b-d3aa-4b69-92ac-36c5abaccf36.jpeg",
    }
  },
}
</script>

<style lang="scss"></style>
