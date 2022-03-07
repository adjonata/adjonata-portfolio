<script setup lang="ts">
interface Props {
  about: string
}

defineProps<Props>()
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
@import '@/assets/variables';

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
