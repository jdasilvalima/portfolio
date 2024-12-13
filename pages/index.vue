<template>
  <div class="flex flex-col sm:flex-row flex-grow pt-[60px]">
    <!-- Left Side - Static for tablet and desktop -->
    <div class="w-full sm:w-1/2 sm:h-[calc(100vh-60px)] sm:overflow-hidden flex flex-col">
      <!-- Developer Info -->
      <div class="h-1/2 p-4 sm:p-8 flex flex-col sm:mt-6">
        <h2 class="text-2xl sm:text-4xl font-bold mb-2">
          Jade DA SILVA LIMA
        </h2>
        <p class="text-lg sm:text-xl text-gray-600">
          Software Developer
        </p>
      </div>
      <!-- Project Image -->
      <div class="h-1/2">
        <img
          :src="currentProject ? currentProject.images[0] : '/img/main/default.png'"
          alt="Project Preview"
          class="w-full h-full object-contain"
        >
      </div>
    </div>

    <!-- Right Side - Project Squares -->
    <div class="w-full sm:w-1/2 sm:h-[calc(100vh-60px)] sm:overflow-y-auto flex flex-wrap">
      <NuxtLink
        v-for="project in projects"
        :key="project.id"
        :to="`/project/${project.id}`"
        class="w-full sm:w-1/2 aspect-square relative cursor-pointer"
        :style="{ backgroundColor: project.color }"
        @mouseover="currentProject = project"
        @mouseleave="currentProject = null"
      >
        <div
          class="absolute inset-0 flex items-center justify-center"
          :class="{ 'hover:bg-black/10': currentProject && currentProject.id === project.id }"
        >
          <div
            class="w-2/5 h-2/5 rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden"
            :class="currentProject && currentProject.id === project.id ? 'bg-white' : 'bg-black'"
          >
            <img
              v-if="currentProject && currentProject.id === project.id"
              :src="`/img/pattern/pattern${project.id}.jpg`"
              alt="Project Pattern"
              class="w-full h-full object-cover"
            >
          </div>
        </div>
        <div
          v-if="currentProject && currentProject.id === project.id"
          class="absolute bottom-4 left-4 text-white transition-opacity duration-300 flex flex-col"
        >
          <span class="text-xl sm:text-2xl font-semibold">
            {{ project.name }}
          </span>
          <span>
            {{ project.type }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsData from '@/data/projects.json'

const projects = ref(projectsData)
const currentProject = ref(null)
</script>

<style>
@media (max-width: 639px) {
  body {
    overflow-y: auto;
  }
}

@media (min-width: 640px) {
  body {
    overflow: hidden;
  }
}
</style>
