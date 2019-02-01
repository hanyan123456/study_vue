<template>
  <div class="business">
   <div class="business-address">
     <div class="business-address-location">东莞市大岭山镇元岭村翠园街7巷20号102铺</div>
     <div class="business-address-archives">查看食品安全档案</div>
   </div>
   <div class="business-distribution">
     <div class="business-distribution-service">配送服务:由 商家 提供配送服务</div>
     <div class="business-distribution-time">配送时间: 8:00 - 24:00</div>
   </div>
   <div class="business-service">
     <div class="business-service-short">理工短号615592（原大学生粗粮坊）做你身边最快的外卖！</div>
     <div class="business-service-seller">商家服务</div>
   </div>
  </div>
</template>
<script>
  export default {
     name:'Business',
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.business{
  &-address{
    font-size: 16px;
    border-bottom: 10px solid #d6d6d6;
    &-location{
      padding: 10px 5px;
      border-bottom:  1px solid #c2c2c2;
      border-top:  5px solid #c2c2c2;
     &::before{
       content: '';
       display: inline-block;
       width: 16px;
       height:16px;
       background: transparent url("../../assets/images/address.svg") 50%/cover no-repeat;
       margin-right: 5px;
     }
    }
    &-archives{
      padding: 10px 5px;
      &::before{
        content: '';
        display: inline-block;
        width: 14px;
        height:14px;
        background: transparent url("../../assets/images/quality.svg") 50%/cover no-repeat;
        margin-right: 5px;
      }
    }
  }
  &-distribution{
    font-size: 16px;
    border-bottom: 10px solid #d6d6d6;
    &-service{
      padding: 10px 5px;
      border-bottom: 1px solid #c2c2c2;
     &::before{
       content: '';
       display: inline-block;
       width: 14px;
       height:14px;
       background: transparent url("../../assets/images/test.svg") 50%/cover no-repeat;
       vertical-align: -2px;
       margin-right: 5px;
     }
    }
    &-time{
      padding: 10px 5px;
      &::before{
        content: '';
        display: inline-block;
        width: 14px;
        height:14px;
        background: transparent url("../../assets/images/time.svg") 50%/cover no-repeat;
        vertical-align: -2px;
        margin-right: 5px;
      }
    }

  }
  &-service{
    font-size: 16px;
    &-short{
      padding: 10px 5px;
      border-bottom: 1px solid #c2c2c2;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &::before{
        content: '';
        display: inline-block;
        width: 16px;
        height:16px;
        background: transparent url("../../assets/images/horn-gary.svg") 50%/cover no-repeat;
        vertical-align: -2px;
        margin-right: 5px;
      }

    }
    &-seller{
      padding: 10px 5px;
      &::before{
        content: '';
        display: inline-block;
        width: 14px;
        height:14px;
        background: transparent url("../../assets/images/service.svg") 50%/cover no-repeat;
        vertical-align: -2px;
        margin-right: 5px;
      }
    }
  }
}
</style>
