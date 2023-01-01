<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '../../components/Header.vue'
const menuList = ref([
  {
    name: "ご予約",
    link: "/guest_house",
    imageUrl: '/src/assets/images/GH/icon/icon_GH_GN_reserve.png'
  },
  {
    name: "オーナー",
    link: "/guest_house",
    imageUrl: '/src/assets/images/GH/icon/icon_GH_GN_owner.png'
  },
  {
    name: "アクセス",
    link: "/guest_house/access",
    imageUrl: '/src/assets/images/GH/icon/icon_GH_GN_access.png'
  },
  {
    name: "お問合せ",
    link: "/guest_house/contact",
    imageUrl: '/src/assets/images/GH/icon/icon_GH_GN_contact.png'
  },
]);
</script>

<template>
  <Header
    :menuList="menuList"
    :bgColorClass="'bgDeepPurple'"
    :headerLogoImg="'/src/assets/images/GH/header_logo.png'"
    :headerLogoLink="'/guest_house'"
  />

  <RouterView />
</template>

<style scoped>


@media (min-width: 1024px) {
  
}
</style>
