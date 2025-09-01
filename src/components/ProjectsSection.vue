<template>
  <section id="projects" class="py-20 bg-slate-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Case studies showcasing problem-solving approach and technical leadership
        </p>
      </div>

      <div class="space-y-20">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div 
            class="grid grid-cols-1 lg:grid-cols-2 gap-0"
            :class="index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''"
          >
            <div 
              class="relative overflow-hidden bg-gray-100"
              :class="index % 2 === 1 ? 'lg:col-start-2' : ''"
            >
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-64 lg:h-full object-contain hover:scale-105 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <h3 class="text-3xl font-bold text-gray-900 mb-6">{{ project.title }}</h3>
              
              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-semibold text-primary-red mb-2">Challenge</h4>
                  <p class="text-gray-600 leading-relaxed">{{ project.challenge }}</p>
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-primary-red mb-2">My Role</h4>
                  <p class="text-gray-600 leading-relaxed">{{ project.role }}</p>
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-primary-red mb-2">Outcome</h4>
                  <p class="text-gray-600 leading-relaxed">{{ project.outcome }}</p>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4 mt-8">
                <a 
                  :href="project.linkUrl" 
                  class="inline-flex items-center px-6 py-3 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>