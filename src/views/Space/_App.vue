<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '../../components/Header.vue'
const menuList = ref([
  {
    name: "Drop inとは",
    link: "/space#about",
    imageUrl: '/src/assets/images/main/icon/icon_DI_GN_about.png'
  },
  {
    name: "参加方法",
    link: "/space#join",
    imageUrl: '/src/assets/images/main/icon/icon_DI_GN_join.png'
  },
  {
    name: "アクセス",
    link: "/space#access",
    imageUrl: '/src/assets/images/main/icon/icon_DI_GN_access.png'
  },
  {
    name: "お問合せ",
    link: "/space/contact",
    imageUrl: '/src/assets/images/main/icon/icon_DI_GN_contact.png'
  },
]);
</script>

<template>
  <Header
    :menuList="menuList"
    :bgColorClass="'bgDeepGreen'"
    :headerLogoImg="'/src/assets/images/main/Dropin_logo_w.png'"
    :headerLogoLink="'/space'"
  />
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
  
}
</style>
