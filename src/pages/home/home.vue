<template>
  <div class="home">
    <home-header></home-header>
    <home-search></home-search>
    <home-icons :iconList="iconList"></home-icons>
    <home-seller></home-seller>
    <v-navigation></v-navigation>
  </div>
</template>
<script>
  import Navigation from '../../nav/navigation.vue';
  import HomeHeader  from './components/header.vue';
  import HomeSearch  from './components/search.vue';
  import HomeIcons from './components/icons.vue';
  import HomeSeller from './components/seller.vue'
//  import {mapState} from 'vuex'

  export default {
    name:'Home',
    components:{
      'v-navigation': Navigation,
      HomeHeader,
      HomeSearch,
      HomeIcons,
      HomeSeller
    },
    data(){
      return{
        iconList:[],
        sellerList:[]
      }
    },
    created() {
      this.$store.dispatch('getIndex')
//      console.log(this.$store.dispatch('getIndex'))
//      this.axios.get('/api/index.json').then(res =>{
//        this.iconList=res.data.data.iconList;
//        this.sellerList=res.data.data.sellerList;
//        this.$store.commit('sellerInfo',this.sellerList);
//      })
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.home-header{
  font-size: 16px;
  color: #ffd161;
  line-height: 40px;
}
</style>
