<script setup lang="ts">
import type { Project } from '@/types'

import ProjectsItem from './ProjectsItem.vue'
import Expandable from '@/components/common/Expandable.vue'
import { computed, ref } from 'vue'
import { useScreenSize } from '@/hooks'

interface Props {
  projects: Project[]
}

const props = defineProps<Props>()

const { isMobile, isTablet } = useScreenSize()

const showAll = ref(isMobile.value || isTablet.value ? false : true)

const filteredProjects = computed<Project[]>(() => {
  if (!showAll.value) {
    return props.projects.slice(0, 3)
  } else {
    return props.projects
  }
})
</script>

<template>
  <section class="projects section" id="projects">
    <h3 class="section-title">
      <span class="material-icons">dashboard</span>
      Projetos
    </h3>

    <div class="projects__content section-content">
      <div class="projects__content-list">
        <TransitionGroup name="fade-in">
          <ProjectsItem
            v-for="(project, projectIndex) in filteredProjects"
            :key="'project_' + projectIndex"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :link="project.link"
            :spotlight="project.spotlight"
          />
        </TransitionGroup>
        <Expandable :value="showAll" @input="showAll = $event" />
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

      @media (max-width: $mobile) {
        justify-content: center;
      }
    }
  }
}
</style>
