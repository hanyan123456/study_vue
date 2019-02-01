<template>
  <div class="home-icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="home-icons-wrapper" v-for="item in page">
          <div class="home-icons-img">
            <img :src="item.imgUrl"/>
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
     <div class="home-icons-nearby">
       <span></span>
      <p> 附近商家</p>
       <span></span>
     </div>
  </div>
</template>
<script>
  import SwiperSlide from "../../../../node_modules/vue-awesome-swiper/src/slide.vue";
  import {mapState,mapActions} from 'vuex'
  export default {
    components: {SwiperSlide},
    name:'HomeIcons',
    props:{
//      iconList:{
//        type:Array
//      }
    },
    data(){
      return{
        swiperOption:{
          pagination:{
              el: '.swiper-pagination',
          },
          loop: true
        },
      }
    },
    computed:mapState({
      iconlist:state =>state.homeList.iconList,
      pages(){
        if (this.iconlist) {
//          判断数据是否准备完成   --> 完成，渲染
          const pages=[]
          Array.from(this.iconlist).forEach((item,index) =>{
            // console.log(this.iconlist)
            const page=Math.floor(index/8);
            if(!pages[page]){
              pages[page]=[]
            }
            pages[page].push(item)
          })
          return pages
        }
      },
    })
  }
</script>
<style  rel="stylesheet/scss" lang="scss" scoped>
.home-icons{
  padding: 10px;
  overflow: hidden;
  border-bottom: 1px solid #c2c2c2;
  .home-icons-wrapper{
    float: left;
    width:25%;
    text-align:center;
    height: 70px;
    font-size: 14px;
    .home-icons-img{
      img{
        width:47px;
        height:45px;
      }
    }
  }
  .home-icons-nearby{
    display: flex;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    p{
     flex: 1;
      font-size: 18px;
    }
    span{
      width: 40px;
      height:10px;
      display: inline-block;
      background:transparent url("../../../assets/images/line.svg") 50%/contain no-repeat ;
    }
  }
}
.swiper-container{
  height:0;
  padding-bottom: 50%;
}
.swiper-pagination-bullet-active{
  background-color:blue !important
}

</style>
