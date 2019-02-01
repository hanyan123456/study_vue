<template>
  <div class="home-search">
    <div class="home-search-wrapper">
      <div class="home-search-address">
        <div class="home-search-address-name">苏州市吴中区...</div>
      </div>
      <div class="home-search-name">
        <input type="text" placeholder="请输入商家 商品名"/>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:'HomeSearch',
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.home-search-wrapper{
  display: flex;
  padding: 0 10px;
  .home-search-address{
    width: 120px;
    background:#a6a6a6 ;
    border-radius: 10px;
    .home-search-address-name{
      width:100%;
      font-size: 12px;
      padding: 5px;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .home-search-address-name::before{
      content: '';
      display: inline-block;
      width: 14px;
      height:14px;
      background:transparent url("../../../assets/images/location.svg") 50%/contain no-repeat ;
      background-size: 100%;
      vertical-align: -2px;
    }
    .home-search-address-name::after{
      content: '';
      display: inline-block;
      width: 14px;
      height:14px;
      background:transparent url("../../../assets/images/right-arrow.svg") 50%/contain no-repeat ;
      background-size: 100%;
      vertical-align: -2px;
    }
  }
  .home-search-name{
    flex: 1;
    margin-left: 6px;
    background:#ededed;
    text-align: center;
    border-radius: 10px;
    input{
      background:none;
      outline:none;
      border:0;
      color: #333;
      padding: 5px 0;
    }
    &::before{
      content: '';
      display: inline-block;
      width: 14px;
      height:14px;
      background:transparent url("../../../assets/images/search-sm.svg") 50%/contain no-repeat ;
      background-size: 100%;
      vertical-align: -2px;
      margin-right: 10px;
    }

  }
}

</style>
