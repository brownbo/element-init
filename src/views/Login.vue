<template>
    <div class="bg">
        <div class="login-wrap">
            <h3>厅堂系统员工登录</h3> 
            <el-form ref="form" :model="form" :rules="rules" label-width="0px">
                <el-form-item prop="name">
                  <el-input id="name"  v-model="form.name" placeholder="请输入帐号">  
                    <template slot="prepend">帐号</template>  
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input id="password" v-model="form.password" type="password" placeholder="请输入密码">  
                    <template slot="prepend">密码</template>  
                  </el-input> 
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="Login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  name: "signin",
  data() {
    return {
      form: {
        name: localStorage.userAccount || "",
        password: ""
      },
      isMemery: false,
      rules: {
        name: [
          {
            required: true,
            message: "请填写登录名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写登录密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    if (!localStorage.clientId) {
      localStorage.clientId = new Date().getTime() + "";
    }
  },
  methods: {
    Login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios({
            url: "user/login",
            method: "POST",
            data: {
              userAccount: this.form.name,
              password: this.form.password,
              clientId: localStorage.clientId
            }
          }).then(res => {
            if (res.result>=0) {
              localStorage.userAccount = this.form.name;
              localStorage.token = res.token;
              this.$router.replace('/');
            } else {
              this.$message.error(res.message);
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.bg {
  position: relative;
  overflow: hidden;
  height: calc(~ "(100vh - 140px)");
  display: flex;
  justify-content: center;
  align-items: center;

  background: #e6e6fa;
  #particles-js {
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
.login-wrap {
  width: 50vw;
  border-radius: 5px;
  padding: 20px;
  z-index: 3;
  background: #fff;
  .el-form-item {
    margin-bottom: 25px !important;
  }
  h3 {
    text-align: center;
    color: #999;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 18px;
    span {
      color: #20a0ff;
    }
  }
  form {
    margin-top: 25px;
    .el-form-item {
      margin-bottom: 15px;
    }
  }
  a {
    text-decoration: none;
    color: #1f2d3d;
  }
  button {
    width: 100%;
    font-weight: 600;
  }
}
</style>