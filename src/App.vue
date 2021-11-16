<script lang="ts">
import { defineComponent } from 'vue'
import { Header, Footer } from '@/components/layout'
import { useStore } from '@/store'

export default defineComponent({
  components: { Header, Footer },
  setup() {
    const store = useStore()

    store.dispatch('getInformations')

    return {
      state: store.state,
    }
  },
})
</script>

<template>
  <!-- Head Meta-tags -->
  <Teleport to="head">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Roboto:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </Teleport>

  <!-- Body content -->
  <Header
    :count="{
      knowledges: state.knowledges.length,
      projects: state.projects.length,
    }"
  />
  <RouterView class="router-view" />
  <Footer />
</template>

<style lang="scss">
@import '~/src/assets/global.scss';

.router-view {
  width: $fullhd;
  max-width: 95%;
}
</style>
