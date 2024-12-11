<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header -->
    <header class="bg-black text-white px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center">
      <h1 class="text-xl sm:text-2xl font-bold">
        BONJOUR
      </h1>
      <nav class="flex gap-4 sm:gap-8">
        <a href="#work" class="hover:opacity-80 transition-opacity">WORK</a>
        <a href="#about" class="hover:opacity-80 transition-opacity">ABOUT</a>
      </nav>
    </header>

    <!-- Main Content -->
    <div class="flex flex-col sm:flex-row flex-grow">
      <!-- Left Side - Static for tablet and desktop -->
      <div class="w-full sm:w-1/2 sm:h-[calc(100vh-64px)] sm:overflow-hidden flex flex-col">
        <!-- Developer Info -->
        <div class="h-1/2 p-4 sm:p-8 flex flex-col justify-between">
          <h2 class="text-2xl sm:text-3xl font-bold">
            FirstName LastName
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            Software Developer
          </p>
        </div>
        <!-- Project Image -->
        <div class="h-1/2 bg-gray-200">
          <img :src="currentProject.image" alt="Project Preview" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Right Side - Project Squares -->
      <div class="w-full sm:w-1/2 sm:h-[calc(100vh-64px)] sm:overflow-y-auto flex flex-wrap">
        <div
          v-for="project in projects"
          :key="project.id"
          class="w-full sm:w-1/2 aspect-square relative"
          :style="{ backgroundColor: project.color }"
          @mouseover="currentProject = project"
        >
          <div
            class="absolute inset-0 flex items-center justify-center"
            :class="{ 'hover:bg-black/10': currentProject.id === project.id }"
          >
            <div
              class="w-16 h-16 rounded-full transition-colors duration-300"
              :class="currentProject.id === project.id ? 'bg-white' : 'bg-black'"
            ></div>
          </div>
          <div
            v-if="currentProject.id === project.id"
            class="absolute bottom-4 left-4 text-white transition-opacity duration-300"
          >
            {{ project.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = [
  { id: 1, name: 'Project One', color: '#F7B500', image: '/img/main/project1.jpg' },
  { id: 2, name: 'Project Two', color: '#4B4BF7', image: '/img/main/project2.jpg' },
  { id: 3, name: 'Project Three', color: '#FF4B1F', image: '/img/main/project3.jpg' },
  { id: 4, name: 'Project Four', color: '#4F5D4F', image: '/img/main/project4.jpg' },
  { id: 5, name: 'Project Five', color: '#E0E0E0', image: '/img/main/project1.jpg' },
  { id: 6, name: 'Project Six', color: '#FFA07A', image: '/img/main/project2.jpg' },
  { id: 7, name: 'Project Seven', color: '#20B2AA', image: '/img/main/project3.jpg' },
  { id: 8, name: 'Project Eight', color: '#DDA0DD', image: '/img/main/project4.jpg' },
]

const currentProject = ref(projects[0])
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
