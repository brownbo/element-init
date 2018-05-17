
<template>
    <div id="topbar-wrap">
      <el-row type="flex" justify="space-between">
          <el-col :span="4">
          </el-col>
          <el-col :span="16" class="center">
            <router-link to="/"><div class="title">智能排队取号系统</div></router-link>
          </el-col>
          <el-col :span="4">
            <router-link v-if="getStore('userAccount')" to="/grxx"><h3 class="freeBtn">您好，{{getStore('userAccount')}}</h3></router-link>
            <router-link v-else to="/login"><h3 class="freeBtn">请登录</h3></router-link>
          </el-col>
      </el-row>
    </div>
</template>
<script>
import screenfull from 'screenfull'
export default {
  name: 'topbar',
  data() {
    return {
      token: localStorage.token || '',
      userAccount: localStorage.userAccount
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse
    }
  },
  methods: {
    toggleSiderBar() {
      this.$store.commit('toggleSiderBar')
    },
    toggleFullscreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: '您的浏览器不支持全屏',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
  },
  watch: {
    $route(to, from) {
      this.pathName = this.$route.path.substring(1)
      this.nowPath = this.$route.path
    }
  }
}
</script>
<style scoped lang="less">
#topbar-wrap {
  width: 100%;
  overflow: hidden;
  border-bottom: 4px solid #0A6D36;
  background: #fff;
  color: #999;
  box-sizing: border-box;
  transition: all 0.3s;
  height: 80px;
  position: fixed;
  top: 0;
  .freeBtn {
    height: 80px;
    line-height: 80px;
    text-align: right;
    padding-right: 10px;
  }
  .title{
    font-family: '幼圆';
    font-size:36px;
    font-weight: 600;
    line-height: 80px;
    letter-spacing: .5em;
    color:#409EFF;
  }
}
</style>
