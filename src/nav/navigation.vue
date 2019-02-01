<!--底部导航-->
<template>
  <div id="nav">
   <ul>
     <router-link tag="li" to="/index">
       <div class="nav-index">
         <img src="../assets/images/home-orange.svg" v-if="active === 'index'"/>
         <img src="../assets/images/home-gary.svg" v-else/>
         <div class="nav-name">首页</div>
       </div>
     </router-link>

     <router-link tag="li" to="/order">
       <div class="nav-index">
         <img src="../assets/images/order-orange.svg" v-if="active === 'order'"/>
         <img src="../assets/images/order-gary.svg" v-else/>
         <div class="nav-name">订单</div>
       </div>
     </router-link>
     <router-link tag="li" to="/user">
       <div class="nav-index">
         <img src="../assets/images/user-orange.svg" v-if="active === 'user'"/>
         <img src="../assets/images/user-gary.svg" v-else/>
         <div class="nav-name">我的</div>
       </div>
     </router-link>

   </ul>
  </div>
</template>
<script>
  export default {
    name:'Nav',
    data(){
      return{
      active:'index',
      }
    },
    mounted(){
      this.active=this.$route.path.slice(1)
    }

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#nav{
  position: fixed;
  bottom: 0;
  z-index: 999;
  left: 0;
  right: 0;
  ul{
    display: flex;
    background: #f2f2f2;
    justify-content: space-between;
    padding: 5px 20px;
    li{
      font-size: 14px;
    }
  }
}
.nav-index img{
  width:26px;
  height:26px;
}
.nav-name{
  margin-top: 3px;
}

</style>
