<template>
  <div class="cityHeader">
    <div class="cityHeader-top">
      <div class="cityHeader-top-icon"></div>
      <div class="cityHeader-top-search">
        <input type="text" placeholder="城市/拼音"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'CityHeader',

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.cityHeader-top{
  display: flex;
  background: #eee;
  padding: 10px 10px;
  align-items: center;
 &-icon{
   width:30px;
   height:30px;
   background: transparent url("../../../assets/images/arrow-right-gary.svg") 50%/contain no-repeat;
 }
  &-search{
    flex: 1;
    input{
      width:80%;
      display:block;
      line-height: 25px;
      margin-left: 15px;
      border-radius: 5px;
      box-shadow: none;
      outline-style: none;
      text-shadow: none;
      border-style: none;
      background: #c2c2c2;
       color: #fff;
    }
  }
}
</style>
