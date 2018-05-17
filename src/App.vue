<template>
      <el-container id="app" class="con-wrap">
        <el-header><top-bar /></el-header>
        <el-main>
          <router-view class="page-component-wrap animated fadeIn"></router-view>
        </el-main>
        <el-footer><footer-bar /></el-footer>
      </el-container>
</template>
<script>
import TopBar from "comp/TopBar";
import FooterBar from "comp/FooterBar";
export default {
  name: "app",
  components: {
    "top-bar": TopBar,
    "footer-bar":FooterBar
  },
};
</script>
<style lang="less">
// 这里是坑啊，文件路径中好像不能用@符号
// 引入全局样式
@import "./assets/styles/global.less";
.el-header,.el-main,.el-footer{
  padding: 0;
}
.el-header{
  height: 80px !important;
}
</style>
