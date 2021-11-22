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
  <article class="projects-item" :style="{ borderBottomColor: color }">
    <div v-if="spotlight" class="projects-item__spotlight">
      <div />
    </div>
    <div class="projects-item__content">
      <div class="projects-item__content-image">
        <img :src="image" :alt="title + '.png'" />
      </div>
      <a :href="link" target="_blank" v-text="title" />
      <p v-text="description" />
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.projects-item {
  background: $black-light;
  border-radius: $items-radius;
  box-shadow: $shadow;
  margin: 15px 0;
  padding: 25px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 3px transparent;

  @media (min-width: $tablet) {
    width: 24%;
    margin: 15px 0.5%;
  }

  @media (max-width: $mobile) {
    width: 100%;
    padding: 20px;
    min-height: 193px;
  }

  &__content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-image {
      height: 130px;
      display: flex;
      align-items: center;

      img {
        width: 115px;
        @media (max-width: $mobile) {
          width: 90px;
        }
      }
    }

    a {
      margin-top: 15px;
      color: $white-dark;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.8px;
      font-size: 20px;
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
}
</style>
