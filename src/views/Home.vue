<script lang="ts">
import { defineComponent } from 'vue'
import { AboutSection, KnowledgesSection } from '@/components/sections'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Home',
  components: { AboutSection, KnowledgesSection },
  setup() {
    const store = useStore()

    return {
      state: store.state,
    }
  },
})
</script>

<template>
  <div class="home">
    <AboutSection :about="state.about.description" />
    <KnowledgesSection :knowledges="state.knowledges" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 1300px;
  max-width: 100%;
  padding: 30px;
}
</style>
