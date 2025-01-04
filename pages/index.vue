<template>
  <div class="flex flex-col sm:flex-row flex-grow pt-[60px]">
    <!-- Developer Info and Default Image (Mobile) -->
    <div class="w-full p-4 sm:p-8 flex flex-col mt-6 sm:hidden">
      <h2 class="text-3xl sm:text-5xl mb-2 name">
        JADE DA SILVA LIMA
      </h2>
      <p class="text-lg sm:text-2xl text-gray-600 mb-4">
        Software Developer
      </p>
      <div class="w-full aspect-square mb-8">
        <img
          src="/img/main/default.png"
          alt="Default Project Image"
          class="w-full h-full object-cover"
        >
      </div>
    </div>

    <!-- Mobile Project List -->
    <div class="w-full sm:hidden">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-container relative"
      >
        <div class="sticky top-0 z-10 w-full aspect-square">
          <NuxtLink
            :to="`/project/${project.id}`"
            class="w-full h-full relative cursor-pointer block"
            :style="{ backgroundColor: project.color }"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-2/5 h-2/5 rounded-full bg-black flex items-center justify-center overflow-hidden" />
            </div>
            <div class="absolute bottom-4 left-4 text-white flex flex-col">
              <span class="text-xl font-semibold">{{ project.name }}</span>
              <span>{{ project.type }}</span>
            </div>
          </NuxtLink>
        </div>
        <div class="w-full aspect-square mt-4">
          <img
            :src="project.mainImage || '/img/main/default.png'"
            :alt="project.name"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden sm:flex sm:flex-row w-full">
      <!-- Left Side -->
      <div class="w-1/2 h-[calc(100vh-60px)] overflow-hidden flex flex-col">
        <!-- Developer Info -->
        <div class="h-1/3 p-8 flex flex-col">
          <h2 class="text-5xl mb-2 name">
            JADE DA SILVA LIMA
          </h2>
          <p class="text-2xl text-gray-600">
            Software Developer
          </p>
        </div>
        <!-- Project Image -->
        <div class="h-2/3">
          <img
            :src="currentProject ? currentProject.mainImage : '/img/main/default.png'"
            alt="Project Preview"
            class="w-full h-full object-cover"
          >
        </div>
      </div>

      <!-- Right Side - Project Squares -->
      <div class="w-1/2 h-[calc(100vh-60px)] overflow-y-auto flex flex-wrap">
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          :to="`/project/${project.id}`"
          class="w-1/2 aspect-square relative cursor-pointer group"
          :style="{ backgroundColor: project.color }"
          @mouseover="currentProject = project"
          @mouseleave="currentProject = null"
        >
          <div
            class="absolute inset-0 flex items-center justify-center group-hover:bg-black/10"
          >
            <div
              class="w-2/5 h-2/5 rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden bg-black group-hover:bg-white"
            />
          </div>
          <div
            class="absolute bottom-4 left-4 text-white transition-opacity duration-300 flex flex-col opacity-0 group-hover:opacity-100"
          >
            <span class="text-2xl font-semibold">
              {{ project.name }}
            </span>
            <span>
              {{ project.type }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsData from '@/data/projects.json'

const projects = ref(projectsData)
const currentProject = ref(null)
</script>

<style scoped>
.name {
  font-family: 'PaperworkBlack', sans-serif;
}

@media (min-width: 640px) {
  body {
    overflow: hidden;
  }
}
</style>
