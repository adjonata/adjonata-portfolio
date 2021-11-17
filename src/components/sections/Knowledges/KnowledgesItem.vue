<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
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
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <article class="knowledges-item">
    <img :src="image" :alt="title + '.png'" />
    <a :href="link" target="_blank" v-text="title" />
  </article>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.knowledges-item {
  background: $black-light;
  padding: 30px;
  border-radius: 10px;
  margin: 15px 30px 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: $mobile) {
    width: 48%;
    margin: 15px 0;
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
}
</style>
