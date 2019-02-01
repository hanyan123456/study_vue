<template>
    <div class='login'>
        <div class="login-header">
            <div class='login-header-icon' @click='goBack'></div>
            <div class='login-header-title'>登录</div>
        </div>
        <!-- 账号密码 -->
        <div class='login-verification'>
            <form>
                <div class='login-verification-user'>
                    <label for='username'>账号</label>
                    <input type="text" placeholder="请输入用户名" v-model="username">
                </div>
                 <div class='login-verification-password'>
                    <label for='password'>密码</label>
                    <input type="password" placeholder="请输入密码" v-model="password" @keyup.enter="login()">
                </div>
                <div class='login-verification-button' @click.prevent='login()'>登录</div>
                <div class='login-tip'>未注册直接输入账号密码，自动注册！</div>
                   <v-aleart :alertText='alertText' v-show="showtip"> </v-aleart>    
            </form>
        </div>
    </div>
</template>
<script>
import AleartTip from "./components/aleartTip.vue";
export default {
  name: "Login",
  components: {
    "v-aleart": AleartTip
  },
  data() {
    return {
      username: "",
      password: "",
      alertText: "",
      showtip: false
    };
  },
  methods: {
    login() {
      if (!this.username) {
        this.alertText = "用户名输入不正确";
        this.showtip = true;
        return;
      }
      if (!this.password) {
        this.alertText = "密码不能为空";
        this.showtip = true;
        return;
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  &-header {
    padding: 10px;
    display: flex;
    &-icon {
      width: 18px;
      height: 18px;
      background: transparent url("../../assets/images/left-arrow-black.svg")
        50% / cover no-repeat;
    }
    &-title {
      flex: 1;
      text-align: center;
      margin-left: 20px;
      line-height: 20px;
      font-size: 18px;
      font-weight: 700;
    }
  }
  &-verification {
    form {
      .login-verification-user {
        margin: 25px 20px;
        border-bottom: 1px solid #eee;
        input {
          background: none;
          outline: none;
          border: 0px;
        }
      }
      .login-verification-password {
        margin: 25px 20px;
        border-bottom: 1px solid #eee;
        input {
          background: none;
          outline: none;
          border: 0px;
        }
      }
      .login-verification-button {
        width: 90%;
        margin: 0 auto;
        background: #ffd161;
        padding: 15px 0;
        text-align: center;
        border-radius: 8px;
        color: #fff;
        font-size: 18px;
      }
      .login-tip {
        text-align: center;
        padding: 20px 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
