<script setup lang="ts">
interface Props {
  link?: string
  title: string
  image: string
}

defineProps<Props>()
</script>

<template>
  <article class="knowledges-item">
    <img :src="image" :alt="title + '.png'" />
    <a :href="link || ''" target="_blank" v-text="title" />
    <slot></slot>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.knowledges-item {
  background: $black-light;
  border-radius: $items-radius;
  box-shadow: $shadow;
  padding: 25px 20px;
  margin: 15px 30px 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: $mobile) {
    width: 30%;
    margin: 15px 0;
    padding: 20px;
    /* min-height: 193px; */
  }

  img {
    width: 80px;
    @media (max-width: $mobile) {
      width: 60px;
    }
  }

  a {
    margin-top: 15px;
    color: $white-dark;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.3px;
    @media (max-width: $mobile) {
      font-size: 13px;
    }
  }
}
</style>
