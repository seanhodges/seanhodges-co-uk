<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-xl font-bold text-primary-red">
        {{ profile.name }}
      </div>
      <nav class="hidden md:flex space-x-8">
        <a 
          href="#skills" 
          class="text-gray-600 hover:text-primary-red transition-colors duration-300 font-medium"
          @click="smoothScroll"
        >
          Skills
        </a>
        <a 
          href="#experience" 
          class="text-gray-600 hover:text-primary-red transition-colors duration-300 font-medium"
          @click="smoothScroll"
        >
          Experience
        </a>
        <a 
          href="#projects" 
          class="text-gray-600 hover:text-primary-red transition-colors duration-300 font-medium"
          @click="smoothScroll"
        >
          Projects
        </a>
      </nav>
      <div class="md:hidden">
        <button 
          @click="toggleMobileMenu" 
          class="text-gray-600 hover:text-primary-red transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
      <nav class="container mx-auto px-4 py-4 space-y-4">
        <a 
          href="#skills" 
          class="block text-gray-600 hover:text-primary-red transition-colors duration-300 font-medium"
          @click="smoothScroll"
        >
          Skills
        </a>
        <a 
          href="#experience" 
          class="block text-gray-600 hover:text-primary-red transition-colors duration-300 font-medium"
          @click="smoothScroll"
        >
          Experience
        </a>
        <a 
          href="#projects" 
          class="block text-gray-600 hover:text-primary-red transition-colors duration-300 font-medium"
          @click="smoothScroll"
        >
          Projects
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  profile: {
    type: Object,
    required: true
  }
})

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const smoothScroll = (event) => {
  event.preventDefault()
  const targetId = event.target.getAttribute('href')
  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    const headerHeight = 80
    const targetPosition = targetElement.offsetTop - headerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
  mobileMenuOpen.value = false
}
</script>