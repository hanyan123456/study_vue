<template>
  <div class="detail">
   <detail-header :seller="seller"></detail-header>
    <div class="detail-title">
      <ul>
        <router-link tag="li" to="/detail/good:id" >商品</router-link>
        <router-link tag="li" to="/detail/comment">评价</router-link>
        <router-link tag="li" to="/detail/business">商家</router-link>
      </ul>
    </div>
    <router-view></router-view>

  </div>
</template>
<script>
  import DetailHeader from './components/header.vue'
  import ShopCart from '../good/components/shopCart.vue'
  import axios from 'axios'
  export default {
    name:'Detail',
    components:{
      DetailHeader,

    },
    data(){
      return{
        seller:{},
      }
    },
    mounted(){
      this.getDetailInfo()
    },
    methods:{
      getDetailInfo(){
        axios.get('/api/seller.json').then(this.getDetailInfoSucc)
      },
      getDetailInfoSucc(res){
//        console.log(res);
        this.seller=res.data.seller;

      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .detail-title{
    ul{
      display: flex;
      justify-content: space-between;
      padding: 10px 30px;
      li{
       padding-bottom: 10px;
        font-size: 14px;
      }
      li:hover{
        color: coral;
        border-bottom: 2px solid coral;
      }
    }
  }
</style>
