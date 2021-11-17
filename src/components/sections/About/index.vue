<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    about: {
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
  <section class="about section" id="about">
    <h3 class="section-title">
      <span class="material-icons">person</span>
      Sobre mim
    </h3>

    <div class="about__content section-content">
      <p v-text="about" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.about {
  &__content {
    background: $black-light;
    padding: 30px;
    border-radius: 10px;

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
      }
    }
  }
}
</style>
