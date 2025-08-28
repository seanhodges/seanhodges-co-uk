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
              class="relative overflow-hidden"
              :class="index % 2 === 1 ? 'lg:col-start-2' : ''"
            >
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                  :href="project.liveUrl" 
                  class="inline-flex items-center px-6 py-3 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  View Live
                </a>
                <a 
                  :href="project.repoUrl" 
                  class="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary-red hover:text-primary-red transition-all duration-300 transform hover:scale-105"
                >
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
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