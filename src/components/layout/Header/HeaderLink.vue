<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
      default: 'help',
    },
  },
  setup() {
    return {}
  },
  emits: ['on-navigate'],
})
</script>

<template>
  <article class="header-link" @click="$emit('on-navigate')">
    <span class="material-icons">{{ icon }}</span>
    <h3>{{ title }}</h3>
  </article>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables.scss';

.header-link {
  background-color: $black-light;
  color: $white-dark;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 0 0 $grey-light;

  @media (min-width: $fullhd) {
    min-width: 140px;
  }

  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-right: 5px;
  }

  h3 {
    font-size: 15px;
  }
}
</style>
