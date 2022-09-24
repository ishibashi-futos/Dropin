<script setup>
import { ref } from 'vue'
import Api from '@/api/api.js'
import NewsList from '@/components/NewsList.vue'
const news = ref([]);

Api.fetchNews().then((data) => {
  news.value = data.contents;
});
</script>
<template>
  <div class="section">
    <h2 class="text-center text-xl font-bold py-16">お知らせ</h2>
    <NewsList :newsList="news" />
  </div>
</template>