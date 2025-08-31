<template>
  <div id="app" class="min-h-screen">
    <TheHeader :profile="profile" />
    
    <main>
      <MeSection :profile="profile" />
      <SkillsSection :skills="skills" />
      <ExperienceSection :experience="experience" />
      <ProjectsSection :projects="projects" />
      <InterestsSection :interests="interests" />
    </main>
    
    <TheFooter :profile="profile" />
  </div>
</template>

<script setup>
// It would be nice to import these dynamically based on some priority-based ordering...
import TheHeader from './components/TheHeader.vue'
import MeSection from './components/MeSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import InterestsSection from './components/InterestsSection.vue'
import TheFooter from './components/TheFooter.vue'

import { 
  profile, 
  skills, 
  experience, 
  projects,
  interests 
} from './data.js'
</script>

<style scoped>
#app {
  scroll-behavior: smooth;
}
</style>