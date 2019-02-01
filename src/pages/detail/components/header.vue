<template>
  <div class="detail-header">
    <div class="detail-header-top">
      <div class="detail-header-top-back" @click="goIndex"></div>
      <div class="detail-header-top-name">{{seller.name}}</div>
      <div class="detail-header-top-share"></div>
    </div>
    <div class="detail-header-content">
     <div class="detail-header-content-avatar">
       <img :src="seller.avatar" alt="">
     </div>
     <div class="detail-header-content-detail">
       <div class="detail-header-content-detail-one">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
       <div class="detail-header-content-detail-two">{{seller.active}}</div>
     </div>
      <div class="detail-header-content-count">5</div>
    </div>
    <div class="detail-header-news">
      <div class="detail-header-news-content">{{seller.bulletin}}</div>
      <div class="detail-header-news-count">3个活动</div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'DetailHeader',
    props:{
      seller:{
        type:Object,
      }
    },
    methods:{
      goIndex(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .detail-header{
    background: #333;
  }
.detail-header-top{
  display: flex;
  padding:15px 10px 10px 10px;
  &-back{
    width: 20px;
    height:20px;
    background:transparent url("../../../assets/images/left-arrow-white.svg") 50%/contain no-repeat ;
    background-size: 100%;
    vertical-align: -2px;
  }
  &-name{
    flex: 1;
    color: #fff;
    text-align: center;
  }
  &-share{
    width: 20px;
    height:20px;
    background:transparent url("../../../assets/images/share.svg") 50%/contain no-repeat ;
    background-size: 100%;
    vertical-align: -2px;
  }
}
  .detail-header-content{
    color: #fff;
    display: flex;
    padding: 10px 10px ;
    border-bottom: 1px solid #fff;
    &-avatar{

      img{
        width:60px;
        height:60px;
      }
    }
    &-detail{
      flex: 1;
      font-size: 14px;
      margin-top: 14px;
      margin-left: 10px;
      &-one{
        padding: 0 0 10px 0;
      }
    }
    &-count{
      width:40px;
      height:20px;
      line-height: 20px;
      margin-top: 30px;
      border: 1px solid #fff;
      border-radius: 4px;
      text-align: center;
    }
  }
  .detail-header-news{
    display: flex;
    color: #fff;
    padding: 5px 10px;
    &-content{
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis ;
      font-size: 12px;
      &::before{
        content: '';
        display: inline-block;
        width:14px;
        height:14px;
        background:transparent url("../../../assets/images/horn.svg") 50%/contain no-repeat ;
        vertical-align: -2px;
        margin-right: 4px;
      }
    }
    &-count{
      font-size: 13px;
      &::after{
        content: '';
        display: inline-block;
        width:14px;
        height:14px;
        background:transparent url("../../../assets/images/right-arrow.svg") 50%/contain no-repeat ;
        vertical-align: -2px;
        margin-right: 4px;
      }
    }
  }
</style>
