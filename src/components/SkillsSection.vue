<template>
  <section id="skills" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A varied toolkit aquired over years of hands-on experience in modern web development
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
          </div>
          <ul class="space-y-2">
            <li v-for="language in skills.languages" :key="language" class="text-gray-600">
              {{ language }}
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Frameworks</h3>
          </div>
          <ul class="space-y-2">
            <li v-for="framework in skills.frameworks" :key="framework" class="text-gray-600">
              {{ framework }}
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Tools</h3>
          </div>
          <ul class="space-y-2">
            <li v-for="tool in skills.tools" :key="tool" class="text-gray-600">
              {{ tool }}
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Platforms</h3>
          </div>
          <ul class="space-y-2">
            <li v-for="platform in skills.platforms" :key="platform" class="text-gray-600">
              {{ platform }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  skills: {
    type: Object,
    required: true
  }
})
</script>