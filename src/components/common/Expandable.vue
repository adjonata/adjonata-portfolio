<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScreenSize } from '@/hooks'

const props = defineProps<{ value: boolean }>()
const emit = defineEmits(['input'])

const { isMobile, isTablet, isSmallDesktop, isLargerDesktop } = useScreenSize()
const showAll = ref(props.value)

watch(showAll, (newValue) => emit('input', newValue))
watch([isSmallDesktop, isLargerDesktop], (isSmall, isLarger) => {
  if (isSmall || isLarger) {
    showAll.value = true
  }
})
</script>

<template>
  <div v-if="isMobile || isTablet" class="expand">
    <div v-if="!showAll" @click="showAll = true">
      Mostrar todos
      <span class="material-icons"> keyboard_arrow_down </span>
    </div>
    <div v-else @click="showAll = false">
      Mostrar menos
      <span class="material-icons"> keyboard_arrow_up </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.expand {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    color: $grey-blue-dark;
    text-transform: lowercase;

    span {
      margin-left: 5px;
      font-size: 15px;
    }
  }
}
</style>
