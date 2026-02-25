<template>
  <div>
    <!-- Animated Mesh Gradient Background -->
    <div class="mesh-gradient-bg">
      <div class="mesh-blob mesh-blob--indigo" />
      <div class="mesh-blob mesh-blob--violet" />
      <div class="mesh-blob mesh-blob--cyan" />
    </div>

    <!-- Subtle Noise Overlay -->
    <div class="noise-overlay" />

    <!-- Content -->
    <div class="relative z-10">
      <Navigation />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { loadConfig } = useConfig()

// Load all configuration on app mount
onMounted(async () => {
  await loadConfig()
})
</script>

<style>
/* Global styles are in assets/css/main.css */
</style>
