<template>
    <div id="footerbar-wrap"  class="center">
        <p>
          欢迎光临四川广安农村商业银行经开区支行，
          <span v-if="!getStore('userAccount')">
            当前你尚未登录系统。
          </span>
          <span v-else>
            当前个人业务等待{{personal}}人，对公业务等待{{public1}}人，其他业务等待{{vip}}人。
          </span>
        </p>
    </div>
</template>
<script>
export default {
  name: "footer-bar",
  data() {
    return {
      isLogin:localStorage.userAccount ? true : false,
      personal:10,
      public1:20,
      vip:3,
    };
  },
  mounted() {
    console.log(this.getStore('token'));
  },
  methods: {
  }
};
</script>
<style scoped lang="less">
#footerbar-wrap {
  width: 100%;
  overflow: hidden;
  border-top: 4px solid #0A6D36;
  background: #409EFF;
  color: #fff;
  box-sizing: border-box;
  transition: all 0.3s;

  p{
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    height: 60px;
    line-height: 60px;
  }
}
</style>
