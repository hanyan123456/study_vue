<template>
  <div class="commentDetail">
    <div class="commentDetail-header">
      <div class="commentDetail-header_all">全部</div>
      <div class="commentDetail-header_hasImg">有图</div>
      <div class="commentDetail-header_comment">点评 <span>(0.0分)</span></div>
    </div>
    <div class="commentDetail-body">
      <ul>
        <li v-for="(item,index) in commentLists" :key="item.index">
          <div class="commentDetail-user">
            <div class="commentDetail-user-avatar"><img :src="item.avatar" /></div>
            <div class="commentDetail-user-detail">
              <div class="commentDetail-user-detail_name">{{item.name}}</div>
              <div class="commentDetail-user-detail_type">
                <el-rate
                  :style="{'fontSize': 10}"
                  v-model="item.type"
                  disabled show-score text-color="#ff9900" score-template="{value}">
                </el-rate>
              </div>
              <div class="commentDetail-user-detail_text">{{item.comment}}</div>
            </div>
            <div class="commentDetail-user-data">{{item.data}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:'CommentDetail',
    data(){
      return{

      }
    },
    props:{
      commentLists:{
        type:Array
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.commentDetail-header{
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  &_all{
    flex: 1;
    border: 1px solid #ffb000;
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
    line-height: 30px;
    &:hover{
      background:#ffd161;
      color: white;
    }
  }
  &_hasImg{
    flex: 1;
    border: 1px solid #ffb000;
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
    line-height: 30px;
    &:hover{
      background:#ffd161;
      color: white;
    }
  }
  &_comment{
    flex: 1;
    border: 1px solid #ffb000;
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
    line-height: 30px;
    &:hover{
    background:#ffd161;
    color: white;
  }
  }
}
  .commentDetail-user{
    display: flex;
    padding: 10px 10px;
    border-bottom: 1px solid #eee;
    &-avatar{
      width: 50px;
      height:50px;
      img{
        width:100%;
        height:100%;
        border-radius: 50%;
        background-size: cover;
      }
    }
    &-detail{
      margin-left: 15px;
      flex: 1;
      &_name{
        font-size: 14px;
        font-weight: bolder;
      }
      &_text{
        font-size: 12px;
        line-height: 14px;
      }
    }
    &-data{
      font-size: 12px;
    }
  }
  .commentDetail-body ul li:nth-child(n+1){
    padding-bottom: 15px;
  }
.commentDetail-body ul li{
  padding: 10px 10px;
}

</style>
