<script setup>
import { ref } from 'vue'
import Api from '../../api/api.js'

const props = defineProps({
  id: Number
})
const news = ref([]);
Api.fetchNews(props.id).then((data) => {
  console.log(data)
  news.value = data;
});
</script>
<template>
 <section class="section">
  <h1 class="text-center text-xl font-bold py-16">{{ news.title }}</h1>
  <div v-html="news.content"></div>
 </section>
</template>