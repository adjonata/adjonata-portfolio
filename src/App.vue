<script setup lang="ts">
import { onMounted } from 'vue'
import { Header, Footer, FloatingButton, Loading } from '@/components/layout'
import {
  AboutSection,
  KnowledgesSection,
  ProjectsSection,
  SocialSection,
} from '@/components/sections'
import { useInformationsStore } from '@/stores'

const { fetchInformations, $state } = useInformationsStore()

onMounted(async () => {
  await fetchInformations()
})
</script>

<template>
  <!-- Head Meta-tags -->
  <Teleport to="head">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin="true"
    />
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
  <div v-if="$state.loaded" class="view">
    <FloatingButton />
    <Header />
    <AboutSection :about="$state.about?.description || ''" />
    <KnowledgesSection :knowledges="$state.knowledges || []" />
    <ProjectsSection :projects="$state.projects || []" />
    <SocialSection :socials="$state.social || []" />
    <Footer />
  </div>

  <Loading v-else />
</template>

<style lang="scss">
@import '@/assets/global.scss';

.view {
  width: 1200px;
  max-width: 95%;
}
</style>
