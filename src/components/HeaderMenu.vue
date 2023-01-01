<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  menuList: {
    type: Array,
    required: true
  },
  bgColorClass: {
    type: String,
    required: false
  },
  headerClass: {
    type: String,
    required: true
  },
})
</script>

<template>
  <ul :class="[bgColorClass, headerClass]">
    <a :href="item.link" v-for="item in menuList"
      @click.native="$emit('close')"
      class="item pl-3"
    >
      <li>
        <img :src="item.imageUrl" class="icon"/>
        <p class="text-white text-sm text-center">{{ item.name }}</p>
      </li>
    </a>
  </ul>
</template>

