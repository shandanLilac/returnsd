<script setup>
import itemPad from './components/itemPad.vue'
</script>

<template>
  <div class="main-box">
    <div class="container">
      <div class="items" v-for="item in 4" :key="item">
        <itemPad></itemPad>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  margin-top: 20px;
  background: #fff;
  padding: 40px 0;

  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>