<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['reset-scroll'])

const show = ref<boolean>(false)

function changeScroll() {
  const distanceBetweenTheOverAndTheTop = document
    .getElementById('about')
    ?.getBoundingClientRect().top

  if (distanceBetweenTheOverAndTheTop !== undefined) {
    show.value = distanceBetweenTheOverAndTheTop <= 0
  }
}

document.addEventListener('scroll', changeScroll)

function resetScroll() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  emit('reset-scroll')
}
</script>

<template>
  <button v-show="show" class="floating-button" @click="resetScroll">
    <span class="material-icons"> arrow_upward </span>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.floating-button {
  position: fixed;
  background: $blue-dark;
  border: 0;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  transition: filter 0.3s;

  bottom: 80px;
  right: 80px;

  @media (max-width: $mobile) {
    right: 15px;
    bottom: 15px;
    height: 45px;
    width: 45px;
  }

  &:hover {
    filter: brightness(90%);
  }

  span {
    color: $white-dark;
  }
}
</style>
