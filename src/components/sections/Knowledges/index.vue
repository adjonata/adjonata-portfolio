<script lang="ts">
import { defineComponent } from 'vue'
import KnowledgesItem from './KnowledgesItem.vue'

export default defineComponent({
  components: { KnowledgesItem },
  props: {
    knowledges: {
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
  <section class="knowledges section" id="knowledges">
    <h3 class="section-title">
      <span class="material-icons">account_balance</span>
      Conhecimentos
    </h3>

    <div class="knowledges__content section-content">
      <div class="knowledges__content-list">
        <KnowledgesItem
          v-for="knowledge in knowledges"
          :key="knowledge._id"
          :title="knowledge.title"
          :image="knowledge.image"
          :link="knowledge.link"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.knowledges {
  &__content {
    border-radius: 10px;

    &-list {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: $mobile) {
        justify-content: space-between;
      }
    }
  }
}
</style>
