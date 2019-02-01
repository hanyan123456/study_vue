<template>
  <div class="comment">
    <comment-header></comment-header>
    <comment-detail :commentLists="commentLists"></comment-detail>
  </div>
</template>
<script>
  import CommentHeader from './components/header.vue'
  import CommentDetail from './components/detail.vue'
  import axios from 'axios'

  export  default {
    name:'Comment',
    components:{
      CommentHeader,
      CommentDetail,
    },
    data(){
      return{
        commentLists:[],
      }
    },
    mounted(){
      this.getcommentInfo()
    },
    methods:{
      getcommentInfo(){
        axios.get('/api/comment.json').then(this.getcommentInfoSucc)
      },
      getcommentInfoSucc(res){
      this.commentLists=res.data.commentLists;
      console.log(this.commentLists)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
