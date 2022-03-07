<script setup lang="ts">
import type { Project } from '@/types'

import ProjectsItem from './ProjectsItem.vue'

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>

<template>
  <section class="projects section" id="projects">
    <h3 class="section-title">
      <span class="material-icons">dashboard</span>
      Projetos
    </h3>

    <div class="projects__content section-content">
      <div class="projects__content-list">
        <ProjectsItem
          v-for="(project, projectIndex) in projects"
          :key="'project_' + projectIndex"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          :spotlight="project.spotlight"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.projects {
  padding-bottom: 10px;
  &__content {
    border-radius: 10px;

    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
}
</style>
