<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '../../components/Header.vue'
const menuList = ref([
  {
    name: "ホーム",
    link: "/guest_house"
  },
  {
    name: "ご予約",
    link: "/guest_house"
  },
  {
    name: "オーナー",
    link: "/guest_house"
  },
  {
    name: "おしらせ",
    link: "/guest_house/news"
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
