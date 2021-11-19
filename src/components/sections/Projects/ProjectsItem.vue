<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    spotlight: {
      type: Boolean,
      required: true,
      default: false,
    },
    color: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <article class="projects-item">
    <img :src="image" :alt="title + '.png'" />
    <a :href="link" target="_blank" v-text="title" />
    <p v-text="description" />
  </article>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.projects-item {
  background: $black-light;
  padding: 30px;
  border-radius: 10px;
  margin: 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $tablet) {
    width: 31%;
  }

  @media (max-width: $mobile) {
    width: 100%;
    padding: 20px;
    min-height: 193px;
  }

  img {
    width: 100px;
    @media (max-width: $mobile) {
      width: 90px;
    }
  }

  a {
    margin-top: 15px;
    color: $white-dark;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.3px;
    @media (max-width: $mobile) {
      font-size: 15px;
    }
  }

  p {
    white-space: pre-wrap;
    color: $white-dark;
    font-size: 15px;
    line-height: 22px;
    margin-top: 15px;
    text-align: center;
    letter-spacing: 1px;
  }
}
</style>
