<template>
  <div class="flex flex-col sm:flex-row pt-[64px] min-h-[calc(100vh-64px)]">
    <div v-if="project" class="w-full flex flex-col sm:flex-row">
      <!-- Left Side - Gallery -->
      <div class="w-full sm:w-1/2 h-[50vh] sm:h-[calc(100vh-64px)] relative">
        <img 
          :src="project.images[currentImageIndex]" 
          :alt="`${project.name} - Image ${currentImageIndex + 1}`" 
          class="w-full h-full object-cover"
        />
        
        <!-- Gallery Navigation -->
        <button 
          @click="previousImage" 
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextImage" 
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Right Side - Project Info -->
      <div class="w-full sm:w-1/2 p-8 flex flex-col sm:mt-12">
        <div class="flex-grow">
          <!-- Project Title -->
          <h1 class="text-4xl font-bold mb-12">{{ project.name }}</h1>

          <!-- Project Links -->
          <div class="flex gap-6 mb-12">
            <a 
              :href="project.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-black hover:opacity-70 transition-opacity"
            >
              GITHUB
            </a>
            <a 
              :href="project.website" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-black hover:opacity-70 transition-opacity"
            >
              WEBSITE
            </a>
          </div>

          <!-- Project Details -->
          <div class="space-y-8">
            <section>
              <h2 class="text-sm font-bold mb-4">INTRODUCTION</h2>
              <p class="text-gray-600">{{ project.introduction }}</p>
            </section>

            <section>
              <h2 class="text-sm font-bold mb-4">GOALS</h2>
              <p class="text-gray-600">{{ project.goals }}</p>
            </section>

            <section>
              <h2 class="text-sm font-bold mb-4">TECHNOLOGIES</h2>
              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </section>
          </div>
        </div>

        <!-- Project Navigation -->
        <div class="flex justify-between items-center pt-8 border-t">
          <NuxtLink 
            v-if="previousProject"
            :to="`/project/${previousProject.id}`"
            class="text-black hover:opacity-70 transition-opacity"
          >
            ← PREVIOUS
          </NuxtLink>
          <div v-else></div>
          
          <NuxtLink 
            v-if="nextProject"
            :to="`/project/${nextProject.id}`"
            class="text-black hover:opacity-70 transition-opacity"
          >
            NEXT →
          </NuxtLink>
          <div v-else></div>
        </div>
      </div>
    </div>
    
    <div v-else class="flex-grow flex items-center justify-center">
      <p class="text-2xl text-gray-600">Project not found</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import projectsData from '~/data/projects.json'

const route = useRoute()
const currentImageIndex = ref(0)
const projects = ref(projectsData)

const project = computed(() => {
  const id = parseInt(route.params.id)
  return projects.value.find(p => p.id === id)
})

const previousProject = computed(() => {
  if (!project.value) return null
  const index = projects.value.findIndex(p => p.id === project.value.id)
  return index > 0 ? projects.value[index - 1] : null
})

const nextProject = computed(() => {
  if (!project.value) return null
  const index = projects.value.findIndex(p => p.id === project.value.id)
  return index < projects.value.length - 1 ? projects.value[index + 1] : null
})

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = project.value.images.length - 1
  }
}

const nextImage = () => {
  if (currentImageIndex.value < project.value.images.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

// Reset image index when project changes
watch(() => route.params.id, () => {
  currentImageIndex.value = 0
})
</script>
