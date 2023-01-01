<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  menuList: {
    type: Array,
    required: true
  },
  bgColorClass: {
    type: String,
    required: true
  },
  headerLogoImg: {
    type: String,
    required: true
  },
  headerLogoLink: {
    type: String,
    required: true
  },
})
</script>

<template>
  <nav class="header shadow-2xl" :class="bgColorClass">
    <router-link :to="headerLogoLink" class="header_logo px-6">
      <img :src="headerLogoImg" />
    </router-link>
    <ul class="header_nav">
      <a :href="item.link" v-for="item in menuList"
        class="item"
      >
      <li>
        <img :src="item.imageUrl" class="icon"/>
        <p class="text-white text-sm">{{ item.name }}</p>
      </li>
    </a>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 50;
  &_logo {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &_nav {
    display: flex;
    justify-content: flex-end;
    .icon {
      height: 60px;
    }
    .item {
      width: 120px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  
}
</style>
