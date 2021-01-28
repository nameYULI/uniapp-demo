<!--
 * @Description: 
 * @Author: yuli
 * @Date: 2021-01-28 19:27:05
 * @LastEditors: yuli
 * @LastEditTime: 2021-01-28 19:56:17
-->
<template>
  <image
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
}
</script>
<style lang="scss">
.img-border {
  border-radius: 50%;
}
</style>
