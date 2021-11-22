<script lang="ts">
import { defineComponent } from 'vue'
import {
  AboutSection,
  KnowledgesSection,
  ProjectsSection,
} from '@/components/sections'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Home',
  components: { AboutSection, KnowledgesSection, ProjectsSection },
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
    <AboutSection v-if="state.loaded" :about="state.about.description" />
    <KnowledgesSection v-if="state.loaded" :knowledges="state.knowledges" />
    <ProjectsSection v-if="state.loaded" :projects="state.projects" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 1300px;
  max-width: 100%;
  padding: 30px;
}
</style>
