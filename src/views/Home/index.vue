<script setup>
// import itemPad from './components/itemPad.vue'
import itemPad from './components/itemPad2.vue'
</script>

<template>
  <div class="main-box">
    <div class="container">
      <h1>参与讨论</h1>
      <div class="contain">
        <div class="items" v-for="item in 4" :key="item">
          <itemPad></itemPad>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  margin-top: 20px;
  background: #fff;
  padding: 40px 0;

  .contain {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>