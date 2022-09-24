<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="headerNav">
    <div class="item">ホーム</div>
    <div class="item">ご予約</div>
    <div class="item">オーナー</div>
    <div class="item">お知らせ</div>
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
