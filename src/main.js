import Vue from 'vue'
import App from './App'
import router from './routes'
import  './style/reset.css'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { store }from './stores';
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
