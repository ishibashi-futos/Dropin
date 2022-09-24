<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="headerNav shadow-2xl">
    <router-link class="item text-slate-700 font-bold" to="/">ホーム</router-link>
    <div class="item text-slate-700 font-bold">ご予約</div>
    <div class="item text-slate-700 font-bold">オーナー</div>
    <router-link class="item text-slate-700 font-bold" to="/news">おしらせ</router-link>
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
