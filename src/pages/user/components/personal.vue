<template>
    <div class="personal">
        <div class='personal-avatar'></div>
        <router-link tag="div" to="/login" class='personal-login'>登录/注册</router-link> 
    </div>
</template>

<script>
export default {
  name: "UserPersonal"
};
</script>
<style lang="scss" scoped>
.personal {
  padding: 10px;
  display: flex;
  &-avatar {
    width: 50px;
    height: 50px;
    border: 1px solid #c2c2c2;
    border-radius: 50%;
  }
  &-login {
    flex: 1;
    line-height: 50px;
    text-align: left;
    margin-left: 30px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>

