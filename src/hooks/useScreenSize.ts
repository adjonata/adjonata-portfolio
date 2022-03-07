import { ref, computed, type Ref, type ComputedRef } from 'vue'

interface UseScreenSizes {
  clientWidth: Ref<number>
  isMobile: ComputedRef<boolean>
  isTablet: ComputedRef<boolean>
  isSmallDesktop: ComputedRef<boolean>
  isLargerDesktop: ComputedRef<boolean>
}

export const useScreenSize = (): UseScreenSizes => {
  const clientWidth = ref<number>(window.innerWidth)

  function onResize() {
    clientWidth.value = window.innerWidth
  }

  window.addEventListener('resize', onResize)

  const isMobile = computed(() => clientWidth.value <= 768)

  const isTablet = computed(
    () => clientWidth.value > 768 && clientWidth.value <= 1024
  )

  const isSmallDesktop = computed(
    () => clientWidth.value > 1024 && clientWidth.value <= 1800
  )

  const isLargerDesktop = computed(() => clientWidth.value > 1800)

  return {
    clientWidth,
    isMobile,
    isTablet,
    isSmallDesktop,
    isLargerDesktop,
  }
}
