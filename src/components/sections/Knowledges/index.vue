<script setup lang="ts">
import type { Knowledge } from '@/types'
import { computed, ref } from 'vue'
import KnowledgesItem from './KnowledgesItem.vue'
import Expandable from '@/components/common/Expandable.vue'

interface Props {
  knowledges: Knowledge[]
}

const props = defineProps<Props>()

const showAll = ref(false)

const filteredKnowledges = computed<Knowledge[]>(() => {
  if (!showAll.value) {
    return props.knowledges.slice(0, 9)
  } else {
    return props.knowledges
  }
})
</script>

<template>
  <section class="knowledges section" id="knowledges">
    <h3 class="section-title">
      <span class="material-icons">account_balance</span>
      Conhecimentos
    </h3>

    <div class="knowledges__content section-content">
      <div class="knowledges__content-list">
        <TransitionGroup name="fade-in">
          <KnowledgesItem
            v-for="knowledge in filteredKnowledges"
            :key="knowledge.title"
            :title="knowledge.title"
            :image="knowledge.image"
            :link="knowledge.link"
          />
        </TransitionGroup>
      </div>
      <Expandable :value="showAll" @input="showAll = $event" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.knowledges {
  &__content {
    border-radius: 10px;

    &-list {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: $mobile) {
        justify-content: space-around;
      }
    }
  }
}
</style>
