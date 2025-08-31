<template>
  <section id="experience" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A track record of delivering high-impact solutions and leading successful development teams
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <div class="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-primary-red"></div>
          
          <div 
            v-for="(job, index) in experience" 
            :key="index"
            class="relative mb-12 md:mb-16"
          >
            <div class="md:flex md:items-center">
              <!-- Left side content (even indices) -->
              <div 
                v-if="index % 2 === 0"
                class="md:w-1/2 md:pr-12 mb-8 md:mb-0"
              >
                <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ job.role }}</h3>
                  <h4 class="text-lg font-semibold text-primary-red mb-2">{{ job.company }}</h4>
                  <p class="text-gray-600 mb-4">{{ job.dates }}</p>
                  <ul class="space-y-3">
                    <li 
                      v-for="duty in job.duties" 
                      :key="duty"
                      class="text-gray-700 leading-relaxed flex items-start"
                    >
                      <svg class="w-4 h-4 text-primary-red mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>{{ duty }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Empty space for odd indices on left -->
              <div v-else class="md:w-1/2"></div>
              
              <!-- Timeline dot -->
              <div class="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary-red rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <!-- Right side content (odd indices) -->
              <div 
                v-if="index % 2 === 1"
                class="md:w-1/2 md:pl-12 mb-8 md:mb-0"
              >
                <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ job.role }}</h3>
                  <h4 class="text-lg font-semibold text-primary-red mb-2">{{ job.company }}</h4>
                  <p class="text-gray-600 mb-4">{{ job.dates }}</p>
                  <ul class="space-y-3">
                    <li 
                      v-for="duty in job.duties" 
                      :key="duty"
                      class="text-gray-700 leading-relaxed flex items-start"
                    >
                      <svg class="w-4 h-4 text-primary-red mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>{{ duty }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Empty space for even indices on right -->
              <div v-else class="md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  experience: {
    type: Array,
    required: true
  }
})
</script>