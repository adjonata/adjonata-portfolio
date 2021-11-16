<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Counter from './Counter.vue'

interface CountProp {
  projects: number
  knowledges: number
}

export default defineComponent({
  components: { Counter },
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

<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__content-title">{{ title }}</h1>
      <div class="header__content-items">
        <div>{{ yearsOld }} Anos</div>
        <Counter
          :count="count.knowledges"
          title="Conhecimentos"
          icon="account_balance"
        />
        <Counter :count="count.projects" title="Projetos" icon="dashboard" />
      </div>
    </div>

    <div class="header__image">
      <img :src="`https://github.com/${githubUser}.png`" alt="Github Image" />
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-items {
      display: flex;
    }
  }
}
</style>
