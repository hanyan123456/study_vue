<template>
  <div class="shopCart">
    <div class="shopCart-wrapper">
     <!--小购物车-->
      <div class="shopCart-icon" >
        <div class="shopCart-icon_bg" :class="{iconBgcClick:totalCount!=0}">
          <div class="shopCart-icon_bg_img" :class="{bgiImgClick:totalCount!=0}"  @click="toggleList">
           <div class="shopCart-icon_bg_img_count" v-show="totalCount!=0">{{totalCount}}</div>
          </div>
        </div>
      </div>
    <!--总价和配送费差价-->
      <div class="shopCart-money">
        <div class="shopCart-money-total">
          <div class="shopCart-money-total_total">￥{{totalPrice}}</div>
          <div class="shopCart-money-total_distribution">另需配送费￥{{deliveryPrice}}元</div>
        </div>

      </div>
      <!--起送价-->
      <div class="shopCart-price" :class="{shopCartPriceClick :totalPrice> minPrice}">{{settlement}}</div>
      </div>
        <!--菜单列表-->
        <div class="shopCart-lists" v-show="showList" >
          <div class="shopCart-lists-wrapper">
            <!--列表头部-->
            <div class="shopCart-lists-wrapper-header" >
              <div class="shopCart-lists-wrapper-header-left">购物车</div>
              <div class="shopCart-lists-wrapper-header-right" @click="clearFood">清空</div>
            </div>
              <!--列表详情-->
            <div class="shopCart-lists-wrapper-body">
              <ul>
                <li v-for="(food,index) in selectFoods" :key="index">
                  <div class="shopCart-lists-detail">
                    <div class="shopCart-lists-detail_name">{{food.name}}</div>
                    <div class="shopCart-lists-detail_price">{{food.price}}</div>
                    <!--传值:food="food"-->
                    <cart-control :food="food" :index="index" :index2="index"></cart-control>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>

</template>
<script>
import Vue from "vue";
import cartControl from "./cartControl.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      fold: true
    };
  },
  components: {
    cartControl
  },
  props: {
    seller: {
      type: Object
    },
    deliveryPrice: {
      type: Number
    },
    minPrice: {
      type: Number
    }
  },
  computed: {
    ...mapState({
      goodslist: state => state.goodsList.goods || {}
    }),
    totalPrice() {
      let price = this.$store.getters.sum();
      return price;
    },
    totalCount() {
      let count = this.$store.getters.goodsNumber();
      return count;
    },
    settlement() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice > 0 && this.totalPrice < this.minPrice) {
        return `还差￥${this.minPrice - this.totalPrice}起送`;
      } else {
        return `去结算`;
      }
    },
    showList() {
      if (!this.totalCount) {
        this.fold = false;
        return false;
      }
      return !this.fold;
    },
    selectFoods() {
      let foods = [];
      if (this.goodslist) {
        // console.log(this.goodslist);
        // console.log(Array.from(this.goodslist));
        Array.from(this.goodslist).forEach(good => {
          good.foods.forEach(food => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
      }
      return foods;
    }
  },
  methods: {
    toggleList() {
      if (!this.totalCount) {
        this.flog = false;
      }
      this.fold = !this.fold;
    },

    clearFood() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.shopCart {
  position: fixed;
  width: 100%;
  height: 48px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #141d27;
  z-index: 300;
  &-wrapper {
    display: flex;
  }
}
.shopCart-icon {
  position: relative;
  flex: 0 0 80px;
  &_bg {
    position: relative;
    margin-left: 18px;
    margin-top: -10px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.4);
    line-height: 44px;
    text-align: center;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    border: 6px solid #141d27;
    background-color: #2b333b;
    &_img {
      position: relative;
      left: 9px;
      top: 8px;
      width: 24px;
      height: 24px;
      background: transparent url("../../../assets/images/shop-cart-gary.svg")
        50% 50% / 24px 24px no-repeat;
      &_count {
        position: absolute;
        right: -12px;
        top: -6px;
        text-align: center;
        background-color: red;
        color: #ffffff;
        width: 24px;
        height: 16px;
        font-size: 8px;
        font-weight: 700;
        line-height: 16px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        border-radius: 16px;
      }
    }
  }
}
.shopCart-money {
  flex: 1;
  &-total {
    display: flex;
    color: #c2c2c2;
    padding: 16px 16px;
    &_total {
      padding-right: 10px;
      border-right: 2px solid #c2c2c2;
    }
    &_distribution {
      padding-left: 5px;
      white-space: nowrap;
    }
  }
}
.shopCart-price {
  flex: 0 0 105px;
  color: #c2c2c2;
  line-height: 48px;
  font-size: 13px;
  text-align: center;
  background: #2b333b;
}
.iconBgcClick {
  background: #ffd161;
}
.bgiImgClick {
  background: transparent url("../../../assets/images/shop-cart-white.svg") 50%
    50% / 24px 24px no-repeat;
}
.shopCartPriceClick {
  background: #ffd161;
  color: #fff;
}
.shopCart-lists {
  position: fixed;
  top: 0;
  bottom: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: -1;
  background-color: rgba(7, 17, 27, 0.6);
  &-wrapper {
    flex: 1;
    width: 100%;
    position: fixed;
    bottom: 48px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 217px;
    &-header {
      display: flex;
      padding: 10px 10px;
      background: #c2c2c2;
      &-left {
        flex: 1;
        text-align: left;
        color: #000;
        font-size: 14px;
        font-weight: bolder;
      }
      &-right {
        flex: 1;
        text-align: right;
        color: cornflowerblue;
        font-size: 14px;
        font-weight: bolder;
      }
    }
    &-body {
      background: rgba(250, 250, 250, 0.9);
      color: #000;
      padding: 10px 10px;
      ul {
        li {
          padding: 10px;
          border-bottom: 1px solid #c2c2c2;
        }
      }
    }
  }
}
.shopCart-lists-detail {
  display: flex;
  &_name {
    flex: 1;
    font-size: 14px;
  }
  &_price {
    margin-right: 10px;
    font-size: 14px;
  }
}
</style>
