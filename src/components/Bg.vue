<template>
    <div id="wrapper" ref="wrapper">
        <img src="../assets/img/wechat.jpg">
    </div>
</template>
<script>
export default {
  name: "bg",
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    
  }
};
</script>
<style scoped lang="less">
#wrapper {
  width: 300px;
  margin: 50px auto;
  background: #fff;
  box-shadow: 4px 4px 15px #aaa;
  /*父元素设为3d*/
  transform-style: preserve-3d;
  /*设置父元素得景深*/
  transform: perspective(1000px);
  img {
      width:100%;
  }
}
</style>
