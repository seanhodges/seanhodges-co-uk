<template>
  <div id="app" class="min-h-screen">
    <TheHeader :profile="profile" />
    
    <main>
      <MeSection :profile="profile" />
      <SkillsSection :skills="skills" />
      <ExperienceSection :experience="experience" />
      <ProjectsSection :projects="projects" />
      <PhilosophySection :philosophy="philosophy" />
      <InterestsSection :interests="interests" />
    </main>
    
    <TheFooter :profile="profile" />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import MeSection from './components/MeSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import InterestsSection from './components/InterestsSection.vue'
import TheFooter from './components/TheFooter.vue'

import { 
  profile, 
  skills, 
  experience, 
  projects, 
  philosophy, 
  interests 
} from './data.js'
</script>

<style scoped>
#app {
  scroll-behavior: smooth;
}
</style>