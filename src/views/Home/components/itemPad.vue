<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '前端'
  }
})
</script>

<template>
  <div class="home-item-pad">
    <h3>{{ props.title }}</h3>
    <RouterLink to="/">
      <img alt="">
      <p class="name">前端</p>
      <p class="desc">desc</p>
      <p>点击进入</p>
    </RouterLink>
    <div class="bottom"></div>
  </div>
</template>

<style scoped lang="scss">
.home-item-pad {
  padding: 8px;
  height: 400px;
  width: 240px;
  text-align: center;
  transition: all 0.2s;
  // box-shadow: 0 0 1px rgba($color: #000, $alpha: 0.2);
  border: 1px solid #ddd;

  h3 {
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #666;
    border-bottom: 1px #e7e7e7 solid;
    margin-bottom: 10px;
  }

  a {
    display: inline-block;
    height: 350px;
    width: 100%;

    img {
      height: 246px;
      width: 200px;
    }

    p {
      height: 24px;
      line-height: 24px;

      &:last-child {
        font-size: 16px;
        color: $subColor;
      }
    }
  }

  &:hover {
    transform: translateY(-2px);
    border: none;
    box-shadow: 1px 1px 3px rgba($color: #000, $alpha: 0.5);
  }
}
</style>