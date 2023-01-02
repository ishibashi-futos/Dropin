<template>
  <transition name="modal">
    <div class="modal_overlay" @click.self="$emit('close')">
      <div class="modal_wrapper">
        <div class="modal_container p-10">
          <slot />
        </div>
        <span class="text-xl text-white" @click="$emit('close')">×</span>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  &_overlay {
    position: fixed;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    animation: fade .5s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &_wrapper {
    width: 70%;
    max-height: calc(100vh - 100px);
    margin-top: 50px;
    display: flex;
    @media screen and (max-width: 767px) {
      margin-top: 0px;
      width: 90%;
    }
  }
  &_container {
    animation: fade-flame .5s;
    overflow: scroll;
    width: 100%;
    background-color: white;
  }
}
</style>