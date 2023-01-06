<script setup>
import { ref } from 'vue'
import Api from '@/api/api.js'
import NewsList from '@/components/NewsList.vue'
import {useRouter} from "vue-router" 
const news = ref([]);
const router = useRouter()
const isInGuestHouse = router.currentRoute._value.path.startsWith('/guest_house');
const params = isInGuestHouse ? 'guest_house_index' : 'drop_in_index';
const pathName = isInGuestHouse ? 'guest_house' : 'space';
Api.fetchNewsIndex(params).then((data) => {
  news.value = data.contents;
});
</script>
<template>
  <div class="section">
    <h2 class="text-center text-3xl font-bold py-16">お知らせ</h2>
    <NewsList :newsList="news" :parentRoute="pathName"/>
  </div>
</template>