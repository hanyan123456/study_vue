<template>
  <div>
    <div class="order-header">order</div>
    <v-navigation></v-navigation>
    <router-view></router-view>
  </div>
</template>
<script>
  import Navigation from '../../nav/navigation.vue';
  export default {
    name:'Home',
    components:{
      'v-navigation': Navigation,
    }

  }
</script>
