<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="alerta()">Alert</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup(props, context) {
    const alerta = () => {
      alert('Teste')
    }

    return {
      alerta,
    }
  },
})
</script>
