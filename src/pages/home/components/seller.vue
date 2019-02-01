<template>
  <div class="home-seller">
    <div class="home-seller-header">
      <div class="home-seller-header-sort">综合排序</div>
      <div>销量最高</div>
      <div>距离最近</div>
      <div>筛选</div>
    </div>
    <div class="home-seller-wrapper">
      <ul>
        <router-link tag="li" :to="'/detail/'+item.id" v-for=" item in sellerlist" :key="item.id">
          <div class="home-seller-detail">
            <div class="home-seller-image">
              <img :src="item.imgUrl" >
            </div>
            <div class="home-seller-content">
              <div class="home-seller-content-title">{{item.title}}</div>
              <div class="home-seller-content-desc">{{item.desc}}</div>
              <div class="home-seller-content-price">
                <div class="home-seller-content-price_n"><span>{{item.price}}</span>元</div>
                <div class="home-seller-content-price_o">门市价<span>{{item.originalPrice}}</span>元</div>
              </div>
            </div>
            <div class="home-seller-count">已售{{item.sold}}</div>
          </div>
        </router-link>
      </ul>
      <div style="color: #ffd161;text-align: center">已经到底部了</div>
    </div>

  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  export  default {
    name:'HomeSeller',
    computed:mapState({
      sellerlist:state =>state.homeList.sellerList,
    })
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.home-seller{
  &-header{
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 1px solid #c2c2c2;
    font-size: 14px;
    &-sort{
      &::after{
        content: '';
        display: inline-block;
        width: 14px;
        height:14px;
        margin-left: 3px;
        background:transparent url("../../../assets/images/down-arrow.svg") 50%/contain no-repeat ;
        background-size: 100%;
        vertical-align: -2px;
      }

    }

  }
  &-wrapper{
    position: relative;
    top:0;
    padding-bottom: 60px;
    overflow: hidden;
    ul{
      padding:10px 10px;

      li:nth-child(n+1){
        margin-top: 10px;
        border-bottom: 1px solid #c2c2c2;
      }
    }
  }

}
.home-seller-detail{
  display: flex;
}
.home-seller-image{
  width:120px;
  height:80px;
  margin-bottom: 10px;
  img{
    width:100%;
    height:100%;
  }
}
.home-seller-content{
  flex: 1;
  margin-left: 5px;
  margin-top: 5px;
  &-title{
    white-space: nowrap;
    font-size: 15px;
    font-weight: bolder;
  }
  &-desc{
    white-space: nowrap;
    font-size: 13px;
    padding: 5px 0 ;
  }
  &-price{
   display: flex;
    padding: 12px 0 0 0;
    &_n{
      font-size: 13px;
      color:#06c1ae;
      font-weight: 700;
      span{
        font-size: 16px;
      }
    }
    &_o{
      font-size: 11px;
      line-height: 18px;
      padding-left: 3px;
      color: #999999;
      font-weight: 500;
    }

  }
}
.home-seller-count{
  font-size: 12px;
  font-weight: 800;
  margin-top: 58px;
  color: #666;
  }
</style>
