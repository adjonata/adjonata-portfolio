<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsItem from './ProjectsItem.vue'

export default defineComponent({
  components: { ProjectsItem },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {}
  },
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
        <ProjectsItem
          v-for="knowledge in projects"
          :key="knowledge._id"
          :title="knowledge.title"
          :description="knowledge.description"
          :image="knowledge.image"
          :link="knowledge.link"
          :spotlight="knowledge.spotlight"
          :color="knowledge.color"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.projects {
  &__content {
    border-radius: 10px;

    &-list {
      display: flex;
      flex-wrap: wrap;

      @media (min-width: $tablet) {
        justify-content: space-between;
      }
      @media (max-width: $mobile) {
        justify-content: space-between;
      }
    }
  }
}
</style>
