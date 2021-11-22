<script lang="ts">
import { defineComponent } from 'vue'
import { Header, FloatingButton } from '@/components/layout'
import { useStore } from '@/store'

export default defineComponent({
  components: { Header, FloatingButton },
  setup() {
    const store = useStore()

    store.dispatch('getInformations')

    return {}
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
  <FloatingButton />
  <Header />
  <RouterView class="router-view" />
</template>

<style lang="scss">
@import '~/src/assets/global.scss';

.router-view {
  width: 1200px;
  max-width: 95%;
}
</style>
