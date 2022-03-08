<script setup lang="ts">
interface Props {
  title: string
  description?: string
  link: string
  image: string
  spotlight: boolean
}

defineProps<Props>()
</script>

<template>
  <article class="projects-item">
    <div v-if="spotlight" class="projects-item__spotlight">
      <div />
    </div>
    <div class="projects-item__content">
      <div class="projects-item__content-image">
        <img :src="image" :alt="title + '.png'" />
      </div>
      <a :href="link" target="_blank" v-text="title" />
      <p v-text="description || ''" />
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.projects-item {
  background: $black-light;
  border-radius: $items-radius;
  box-shadow: $shadow;
  margin: 15px 0;
  padding: 25px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 6px $black-light-2;

  @media (max-width: $mobile) {
    width: 100%;
    padding: 5px 30px;
    min-height: 193px;
  }

  @media (min-width: $tablet) and (max-width: $fullhd) {
    width: 40%;
    margin: 15px 2.5%;
    padding: 10px 0;
  }

  @media (min-width: $fullhd) {
    width: 24%;
    margin: 15px 0.5%;
  }

  &__content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: $mobile) {
      padding: 30px 0;
    }

    &-image {
      height: 130px;
      display: flex;
      align-items: center;

      img {
        width: 115px;
        @media (max-width: $mobile) {
          width: 80px;
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
      text-align: center;
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
      letter-spacing: 0.5px;
    }
  }
}
</style>
