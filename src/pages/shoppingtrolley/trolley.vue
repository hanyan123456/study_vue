<template>
  <div class="trolleys">
    <div class="trolleys-header">
      <div class="trolleys-header-icon"></div>
      <div class="trolleys-header-title">购物车</div>
      <div class="trolleys-header-edit">编辑</div>
    </div>
    <div class="trolleys-content">
      <ul>
        <li>
          <div class="trolleys-content-store">
            <span class="trolleys-content-store_select"></span>
            <span class="trolleys-content-store_icon"></span>
            <span class="trolleys-content-store_name"></span>
          </div>
          <ul class="trolleys-content-ul">
            <li>
              <div class="trolleys-content-goods">
                  <div class="trolleys-content-goods-select"></div>
                  <div class="trolleys-content-goods-img"></div>
                  <div class="trolleys-content-goods-detail">
                    <div class="trolleys-content-goods-detail_name">套餐6：墨西哥卷+辣翅+可乐</div>
                    <div class="trolleys-content-goods-detail_total">
                      <div class="trolleys-content-goods-detail_total_count">x1</div>
                      <div class="trolleys-content-goods-detail_total_price">￥16.8</div>
                    </div>
                  </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="trolleys-content-settlement">
        <div class="trolleys-content-settlement-total">￥0.00</div>
        <div class="trolleys-content-settlement-button">去结算111</div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:'Trolley',
    computed:{

    }

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.trolleys{
  &-header{
    display: flex;
    background:rgb(244, 244, 244) ;
    padding: 10px 10px;
    color: rgb(51, 51, 51);
    &-icon{
      width: 16px;
      height:16px;
      background: transparent url("../../assets/images/left-arrow-black.svg") 50%/cover no-repeat;
      margin-right: 5px;
    }
    &-title{
      flex: 1;
      text-align: center;
      font-size: 20px;
      font-weight: bolder;
    }
    &-edit{
      width: 40px;
      font-weight: 700;
    }
  }
  &-content{
    background: #fff;
  }
  .trolleys-content-store{
    padding: 10px 10px;
    display: flex;
    &_select{
      width: 20px;
      height:20px;
      border: 1px solid #e9e8ea;
      border-radius: 50%;
      display: inline-block;
    }
    &_icon{
      width: 21px;
      height:21px;
      border: 1px solid #e9e8ea;
      display: inline-block;
      margin:0 5px
    }
    &_name{
      flex: 1;
      line-height: 22px;
      display:inline-block ;
    }
  }
}
.trolleys-content-goods{
  display: flex;
  padding: 10px 0 10px 10px;
  align-items: center;
  &-select{
    width: 20px;
    height:20px;
    border: 1px solid #e9e8ea;
    border-radius: 50%;
    display: inline-block;

  }
  &-img{
    width:80px;
    height:78px;
    border: 1px solid #e9e8ea;
    margin: 0 5px;

  }
  &-detail{
    flex: 1;
    background: #f7f7f7;
    &_name{
      font-size: 14px;
      font-weight: bolder;
      padding: 5px 10px;
    }
    &_total{
      display: flex;
      padding: 5px 10px;
      margin-top: 35px;
      justify-content: space-between;
    }
  }
}
  .trolleys-content-ul{
    border-bottom: 1px solid #c2c2c2;

  }
  .trolleys-content-settlement{
    display: flex;
    justify-content: flex-end;
    padding: 10px 5px 10px 0;
    &-total{
      flex: 1;
      text-align: right;
      padding-right: 5px;
      line-height: 40px;
    }
    &-button{
      background: #d6d6d6;
      padding: 10px 20px;
    }
  }
</style>
