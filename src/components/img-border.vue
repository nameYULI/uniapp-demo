<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 19:27:05
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-28 20:21:57
-->
<template>
  <image
    @click="handleClick"
    class="img-border"
    :src="src || 'https://cdn.jsdelivr.net/gh/nameYuLi/imgbed@1.2/img/18.jpg'"
  ></image>
</template>
<script>
export default {
  props: {
    src: String,
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      // console.log("超人救人的时候为什么都要穿紧身衣")
      this.$emit(
        "srcChange",
        this.src || "https://cdn.jsdelivr.net/gh/nameYuLi/imgbed@1.2/img/18.jpg"
      )
    },
  },
}
</script>
<style lang="scss">
.img-border {
  border-radius: 50%;
}
</style>
