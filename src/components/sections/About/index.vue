<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    about: {
      type: String,
      required: true,
    },
  },
  setup() {
    const githubUser = 'adjonata'
    const githubUserImage = ref(`https://github.com/${githubUser}.png`)

    return { githubUserImage }
  },
})
</script>

<template>
  <section class="about section" id="about">
    <h3 class="section-title">
      <span class="material-icons">person</span>
      Sobre mim
    </h3>

    <div class="about__content section-content">
      <div class="about__content-image">
        <img :src="githubUserImage" alt="User image" />
      </div>
      <p v-text="about" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.about {
  &__content {
    background: $black-light;
    border-radius: $items-radius;
    box-shadow: $shadow;
    padding: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: $mobile) {
      flex-direction: column;
    }

    &-image {
      padding-right: 40px;

      @media (max-width: $mobile) {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-right: 0;
      }

      img {
        width: 230px;
        border-radius: $items-radius;
      }
    }

    p {
      white-space: pre-wrap;
      color: $white-dark;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.6px;

      @media (max-width: $mobile) {
        font-size: 15px;
        line-height: 26px;
        letter-spacing: 0.3px;
        margin-top: 30px;
      }
    }
  }
}
</style>
