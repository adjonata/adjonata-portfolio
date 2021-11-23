<script lang="ts">
import { defineComponent } from 'vue'
import SocialItem from './SocialItem.vue'

export default defineComponent({
  components: { SocialItem },
  props: {
    social: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <section class="social section" id="links">
    <h3 class="section-title">
      <span class="material-icons">link</span>
      Links úteis
    </h3>

    <div class="social__content section-content">
      <div class="social__content-list">
        <SocialItem
          v-for="(item, index) in social"
          :key="'social_' + index"
          :title="item.title"
          :image="item.image"
          :link="item.link"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '~/src/assets/variables';

.social {
  &__content {
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
