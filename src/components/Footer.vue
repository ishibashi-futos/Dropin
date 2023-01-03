<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue'

const openMenu = ref(false);

defineProps({
  menuList: {
    type: Object,
    required: true
  },
  snsList: {
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
  <div :class="bgColorClass">
    <section class="section">
      <section class="sm:flex sm:justfy-between sm:items-center">
        <router-link :to="headerLogoLink">
          <img :src="headerLogoImg" class="w-28"/>
        </router-link>
        <ul class="flex sm:ml-6">
          <li v-for="sns in snsList" class="flex frex-col items-center">
            <a :href="sns.link" target="_blank">
              <img :src="`/src/assets/images/sns/icon_${sns.name}.svg`" class="w-12 px-1"/>
            </a>
          </li>
          <li>
            <slot />
          </li>
        </ul>
      </section>
      <section>
        <ul class="md:flex mt-20 text-white">
          <li v-for="(menu, index) in menuList" :key="index" 
            class="md:flex-1 p-2">
            <p class="font-bold text-base menu_title">
              {{ menu.title }}
            </p>
            <ul class="mt-3">
              <a :href="item.link" v-for="item in menu.itemList">
                <li class="pb-1">
                  <p>{{ item.name }}</p>
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </section>
      <p class="text-xs text-white text-center">© Drop in. All RIGHTS RESERVED.</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.menu_title {
  border-bottom: solid 1px white;
}
</style>