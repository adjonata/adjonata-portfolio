<script setup lang="ts">
interface Props {
  title: string
  image?: string
  link: string
}

const props = defineProps<Props>()

function openLink() {
  window.open(props.link, '_blank')
}
</script>

<template>
  <article class="social-item" @click="openLink">
    <div class="social-item__content">
      <img :src="image" alt="Social image.png" />
      <span v-text="title" />
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.social-item {
  padding: 30px;
  cursor: pointer;
  @media (max-width: $mobile) {
    padding: 15px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 60px;
      @media (max-width: $mobile) {
        width: 40px;
      }
    }

    span {
      color: $white-dark;
      padding-top: 15px;
      font-weight: 600;
      letter-spacing: 0.3px;
      @media (max-width: $mobile) {
        font-size: 14px;
      }
    }
  }
}
</style>
