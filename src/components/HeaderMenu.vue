<script setup>
// import { generateImgPath } from '../utils/common.js'

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
  <nav :class="[bgColorClass, headerClass]">
    <a :href="item.link" v-for="item in menuList"
      @click.native="$emit('close')"
      class="item pl-3"
    >
        <img :src="item.imageUrl" class="icon"/>
        <p class="text-white text-sm text-center">{{ item.name }}</p>
    </a>
  </nav>
</template>

