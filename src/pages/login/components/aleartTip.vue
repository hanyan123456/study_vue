<template>
    <div class='Aleart'>{{alertText}}</div>
</template>
<script>
export default {
  props: {
    alertText: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.Aleart {
  width: 70%;
  margin: 0 auto;
  background: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}
</style>
