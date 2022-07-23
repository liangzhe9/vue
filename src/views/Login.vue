<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-text">
      <h1 class="login-title">欢迎登陆</h1>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login('form')">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            showClose: true,
            message: '恭喜你，登陆成功',
            type: 'success'
          });
          sessionStorage.setItem("isLogin", "true");
          this.$store.dispatch('asyncUpdateUser', {username: this.form.username});
          return this.$router.push('/main')
        } else {
          this.$message({
            showClose: true,
            message: '错了哦，登陆失败',
            type: 'error'
          });
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.login-title {
  text-align: center
}

.login-text {
  text-align: left;
  width: 400px;
  border: 1px solid #DCDFE6;
  margin: 0 auto;
  margin-top: 150px;
  padding: 20px 50px 20px 30px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
