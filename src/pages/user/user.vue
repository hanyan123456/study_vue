<template>
  <div class="user">
      <div class="user-header">
        <div class="user-header-icon"></div>
        <div class="user-header-title">我的</div>
      </div>
         <user-personal></user-personal>





















    
    <!-- 底部导航 -->
    <v-navigation></v-navigation>
    <router-view></router-view>
  </div>
</template>
<script>
import Navigation from "../../nav/navigation.vue";
import UserPersonal from "./components/personal.vue";
export default {
  name: "Home",
  components: {
    "v-navigation": Navigation,
    UserPersonal
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.user {
  &-header {
    padding: 10px;
    display: flex;
    &-icon {
      width: 20px;
      height: 20px;
      background: transparent url("../../assets/images/left-arrow-black.svg")
        50% / contain no-repeat;
    }
    &-title {
      flex: 1;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>

