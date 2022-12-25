<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '../../components/Header.vue'
const menuList = ref([
  {
    name: "ホーム",
    link: "space/"
  },
  {
    name: "中の人",
    link: "space/owner"
  },
  {
    name: "お問合せ",
    link: "/space/contact"
  },
]);
</script>

<template>
  <Header :menuList="menuList" />

  <RouterView />
</template>

<style scoped>


@media (min-width: 1024px) {
  
}
</style>
