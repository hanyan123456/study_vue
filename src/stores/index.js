import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    homeList: {},
    goodsList: {}
  },
  getters: {
    //商品总价
    sum: (state) => () => {
      var totalPrice = 0
      if (state.goodsList.goods) {
        state.goodsList.goods.forEach(good => {
          good.foods.forEach((food) => {
            if (food.count) {
              totalPrice += food.price * food.count
            }
          });
        })
      }
      return totalPrice
    },
    //商品总数量
    goodsNumber: (state) => () => {
      let totalCount = 0
      if (state.goodsList.goods) {
        // console.log(state.goodsList.goods)
        state.goodsList.goods.forEach(good => {
          good.foods.forEach((food) => {
            if (food.count) {
              totalCount += food.count
            }
          })
        })
      }
      return totalCount
    }


  },
  mutations: {
    // 首页商家
    homeInfo(state, data) {
      state.homeList = data;
    },
    //详情页商品
    goodsInfo(state, data) {
      state.goodsList = data;
    },
    //数量++
    increaseCount(state, payload) {
      if (state.goodsList.goods[payload.index].foods[payload.index2]) {
        let food = state.goodsList.goods[payload.index].foods[payload.index2]
        if (food.count === undefined) {
          Vue.set(food, 'count', 1)
        } else {
          food.count++
        }
      }

    },
    //数量--
    decreaseCount(state, payload) {
      if (state.goodsList.goods[payload.index].foods[payload.index2]) {
        let food = state.goodsList.goods[payload.index].foods[payload.index2]
        if (food.count === 0) {
          return food.count
        } else {
          food.count--
        }
      }

    }
  },
  actions: {
    //获取商家数据
    getIndex({ commit }) {
      axios.get('/api/index.json').then(res => {
        // console.log(res.data.data);
        commit('homeInfo', res.data.data);
      })
    },
    //获取商品数据
    getGoods({ commit }) {
      axios.get('/api/seller.json').then(res => {
        //  console.log(res.data)
        commit('goodsInfo', res.data)

      })
    },
    //执行数量++
    addCount({ commit }, payload) {
      commit('increaseCount', payload)
      //payload对应传的payload.index
    },
    //执行数量--
    reduceCount({ commit }, payload) {
      commit('decreaseCount', payload)

    }
  }
})
