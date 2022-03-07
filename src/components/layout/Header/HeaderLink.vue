<script setup lang="ts">
interface Props {
  title: string
  icon: string
}

defineEmits(['on-navigate'])
defineProps<Props>()
</script>

<template>
  <article class="header-link" @click="$emit('on-navigate')">
    <span class="header-link__icon material-icons" v-if="icon">{{ icon }}</span>
    <h3 class="header-link__title" v-if="title">{{ title }}</h3>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.header-link {
  background-color: $black-light;
  color: $white-dark;
  padding: 15px;
  border-radius: $items-radius;
  cursor: pointer;
  box-shadow: 5px 5px 0 0 $grey-light;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(110%);
  }

  @media (min-width: $fullhd) {
    min-width: 140px;
  }

  display: flex;
  align-items: center;
  user-select: none;

  span {
    font-size: 25px;
    margin-right: 5px;
    color: $blue-light;
  }

  h3 {
    font-size: 15px;
    font-weight: 600;
    @media (max-width: $mobile) {
      font-weight: normal;
    }
  }
}
</style>
