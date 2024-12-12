<template>
  <div class="min-h-screen bg-white flex flex-col">
    <Header />
    <slot />
  </div>
</template>

<script setup>
import Header from '@/components/MainHeader.vue'
</script>
