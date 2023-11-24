<script setup>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Nav></Nav>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>