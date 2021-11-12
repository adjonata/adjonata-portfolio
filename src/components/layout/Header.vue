<template>
  <header class="header">
    <div class="header__content">
      <h1>{{ title }}</h1>
      <ul>
        <li>{{ count.knowledges }}</li>
        <li>{{ count.projects }}</li>
      </ul>
    </div>
    <div class="header__image">
      <img :src="`https://github.com/${githubUser}.png`" alt="Github Image" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

interface CountProp {
  projects: number
  knowledges: number
}

export default defineComponent({
  props: {
    count: {
      type: Object as PropType<CountProp>,
      required: true,
    },
  },
  setup() {
    const [title, githubUser] = [
      ref('A credibilidade é consequência do método'),
      ref('adjonata'),
    ]

    return { title, githubUser }
  },
})
</script>

<style scoped lang="scss">
@import '~/src/assets/variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
