<template>
  <div class="commentHeader">
    <div class="commentHeader-wrapper">
      <div class="commentHeader-wrapper-seller">
        <div class="commentHeader-wrapper-seller-count">3</div>
        <div class="commentHeader-wrapper-seller-title">商家评分</div>
      </div>
      <div class="commentHeader-wrapper-other">
        <ul>
          <li v-for="(item,index) in sellerComment" :key="item.index">
            <div class="commentHeader-wrapper-other_taste" >
              <span class="commentHeader-wrapper-other_taste_name">{{item.name}}</span>
              <div>
                <el-rate
                  v-model="item.type"
                  disabled show-score text-color="#ff9900" score-template="{value}">
                </el-rate>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="commentHeader-wrapper-distribution">
        <div class="commentHeader-wrapper-distribution_count">2.2</div>
        <div class="commentHeader-wrapper-distribution_comment">配送评分</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'CommentHeader',
    data(){
     return{
       sellerComment:[
         {
           name:"口味",
           type:4.3
         },{
           name:"包装",
           type:3.3
         }
       ]
     }
    }

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.commentHeader-wrapper{
  display: flex;
  padding: 10px 10px 0 10px;
  border-bottom: 2px solid #C2C2C2;
  border-top: 2px solid #C2C2C2;
  &-seller{
   &-count{
     font-size: 30px;
     font-weight: 800;
     text-align: center;
     color: darkorange;
     padding-bottom: 10px;
   }
    &-title{
     font-size: 13px;
    }
  }
  &-other{
    flex: 1;
    align-items: center;
    margin-left: 15px;
    &_taste{
     display: flex;
     &_name{
      font-size: 14px;
       color: #666666;
       line-height: 21px;
       font-weight: 600;
       margin-right: 4px;
     }
    }
  }
  &-distribution{
    text-align: center;
    &_count{
      font-size: 40px;
      color: #666666;
      padding-bottom: 2px;
    }
    &_comment{
      font-size: 12px;
    }
  }
}
  .commentHeader-wrapper-other ul li:nth-child(n+1){
    padding-bottom: 15px;
  }
</style>
