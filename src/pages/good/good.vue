<template>
  <div class="goods">
    <div class="goods-menu" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in  goodslist" @click="selectIndex(index,$event)" :key="index" >
          <div class="goods-menu-item"><i v-show="item.type>0"></i>{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="goods-foods" ref="foodWrapper">
      <ul>
        <li v-for="(item,index) in  goodslist" class="foods-list" :key="index">
          <div class="goods-foods-title">{{item.name}}</div>
          <ul class="ul1">
            <li v-for="(item2,index2) in item.foods" class="goods-foods-wrapper" :key="index2">
              <div class="goods-foods-box">
                <div class="goods-foods-img">
                  <img :src="item2.icon" alt="">
                </div>
                <div class="goods-foods-detail">
                  <div class="goods-foods-detail-name">{{item2.name}}</div>
                  <div class="goods-foods-detail-type">{{item2.description}}</div>
                  <div class="goods-foods-detail-sale">月售{{item2.sellCount}}份 好评率{{item2.rating}}%</div>
                  <div class="goods-foods-detail-price">￥{{item2.price}}</div>
                </div>
                <div class="goods-foods-count">
                  <cart-control :food=item2 :index=index :index2=index2></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shop-cart>
  </div>
</template>
<script>
import Vue from "vue";
import BScroll from "better-scroll";
import ShopCart from "./components/shopCart.vue";
import cartControl from "./components/cartControl.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "DetailGood",
  data() {
    return {
      heightList: [],
      scrollY: 0,
      current: "current"
    };
  },
  components: {
    ShopCart,
    cartControl
  },
  created() {
    Vue.nextTick(() => {
      this._initscroll();
      this._caculateHeight();
    });
    this.$store.dispatch("getGoods");
  },
  computed: mapState({
    goodslist: state => state.goodsList.goods || {},
    seller: state => state.goodsList.seller || {},

    currentIndex() {
      for (let i = 0; i < this.heightList.length; i++) {
        let height1 = this.heightList[i];
        let height2 = this.heightList[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  }),
  methods: {
    selectIndex($index, $event) {
      if (!$event._constructed) {
        return;
      }
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "foods-list"
      );
      this.foodScroll.scrollToElement(foodList[$index], 300);
    },
    _initscroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
        probeType: 3,
        click: true
      });
      this.foodScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _caculateHeight() {
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "foods-list"
      );
      let height = 0;
      this.heightList.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.heightList.push(height);
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.goods {
  display: flex;
  position: absolute;
  top: 190px;
  left: 0;
  right: 0;
  bottom: 48px;
  width: 100%;
  overflow: hidden;
  &-menu {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .goods-menu-item {
      padding: 15px 5px;
      text-align: center;
      font-size: 15px;
      line-height: 16px;
      border-bottom: 1px solid #c2c2c2;
      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid green;
        vertical-align: middle;
        background: transparent url("../../assets/images/special.svg") 50% /
          contain no-repeat;
        background-size: 100%;
      }
    }
  }
  &-foods {
    flex: 1;
    background: #fff;
  }
}
.goods-foods-title {
  background: #eee;
  font-size: 14px;
  padding: 5px;
  border-left: 2px solid #c2c2c2;
}
.goods-foods-wrapper {
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
}
.goods-foods-box {
  display: flex;
}
.goods-foods-img {
  width: 60px;
  height: 60px;
  padding-bottom: 3px;
  img {
    width: 100%;
    height: 100%;
  }
}
.goods-foods-detail {
  flex: 1;
  margin-left: 10px;
  font-size: 14px;
  &-name {
    font-weight: bolder;
  }
  &-type {
    padding: 3px;
  }
  &-price {
    padding: 3px;
  }
  &-sale {
    white-space: nowrap;
  }
}
.current {
  border-bottom: none;
  font-weight: bold;
  background: #fff;
}
.goods-foods-count {
  height: 20px;
  line-height: 20px;
  margin-top: 48px;
}
</style>
