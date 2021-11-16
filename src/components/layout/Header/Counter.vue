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
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <article class="counter">
    <h2 class="counter__total">{{ count }}</h2>
    <div class="counter__infos">
      <h3>{{ title }}</h3>
      <span class="material-icons">{{ icon }}</span>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables.scss';

.counter {
  &__total {
  }
}
</style>
