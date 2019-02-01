<template>
  <div class="cart-control">
    <span class="cart-control-reduce" @click="reduce" v-show="food.count>0"></span>
    <span class="cartControl-count" v-show="food.count>0">{{food.count}}</span>
    <span class="cart-control-add" @click="add"></span>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  props: {
    food: {
      type: Object
    },
    index: {
      type: Number
    },
    index2: {
      type: Number
    }
  },
  methods: {
    add(event) {
      this.$store.dispatch("addCount", {
        index: this.index,
        index2: this.index2
      });
    },
    reduce(event) {
      this.$store.dispatch("reduceCount", {
        index: this.index,
        index2: this.index2
      });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.cart-control {
  display: flex;
  /*justify-content: space-between;*/
  align-items: center;
  &-reduce {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
    background: transparent url("../../../assets/images/reduce.svg") 50% /14px 14px
      no-repeat;
  }
  &-add {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-left: 10px;
    background: transparent url("../../../assets/images/add.svg") 50% /14px 14px
      no-repeat;
  }
  &-count {
    display: inline-block;
    font-size: 14px;
    color: inherit;
  }
}
</style>
