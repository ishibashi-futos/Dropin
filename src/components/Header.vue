<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  menuList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav class="headerNav shadow-2xl">
    <router-link :to="item.link" v-for="item in menuList"
      class="item text-slate-700 font-bold"
    >
    {{ item.name }}
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.headerNav {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 50;
  background-color: rgba(255, 255, 255, .7);
  .item {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
