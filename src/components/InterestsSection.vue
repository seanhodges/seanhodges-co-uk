<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Beyond Code</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          When I'm not building software, you'll find me pursuing these passions
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div 
          v-for="interest in interests" 
          :key="interest.name"
          class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
        >
          <div class="w-20 h-20 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <div 
              class="text-primary-red"
              v-html="interest.icon"
            ></div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">{{ interest.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  interests: {
    type: Array,
    required: true
  }
})
</script>