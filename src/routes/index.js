import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', name: 'Home', component: resolve => require(['@/pages/home/home.vue'], resolve) },
    { path: '/order', name: 'Order', component: resolve => require(['@/pages/order/order.vue'], resolve) },
    { path: '/user', name: 'User', component: resolve => require(['@/pages/user/user.vue'], resolve) },
    {
      path: '/detail/:id', name: 'Detail', component: resolve => require(['@/pages/detail/detail.vue'], resolve), redirect: "/detail/good:id", children: [
        { path: '/detail/good:id', name: 'DetailGood', component: resolve => require(['@/pages/good/good.vue'], resolve) },
        { path: '/detail/comment', name: 'Comment', component: resolve => require(['@/pages/comment/comment.vue'], resolve) },
        { path: '/detail/business', name: 'Business', component: resolve => require(['@/pages/business/business.vue'], resolve) },
      ]
    },
    { path: '/city', name: 'City', component: resolve => require(['@/pages/city/city.vue'], resolve) },
    { path: '/trolley', name: 'Trolley', component: resolve => require(['@/pages/shoppingtrolley/trolley.vue'], resolve) },
    { path: '/login', name: 'Login', component: resolve => require(['@/pages/login/login.vue'], resolve) },



  ],
  mode: 'history'
})
