<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="section-container min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Content -->
      <div v-if="profile" class="relative z-10 text-center max-w-5xl mx-auto">
        <div class="reveal">
          <!-- Avatar -->
          <div class="mb-10 flex justify-center">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
              <div class="relative animate-float">
                <img 
                  :src="profile.avatar" 
                  :alt="profile.name"
                  class="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-white/10 shadow-glow-lg"
                />
              </div>
            </div>
          </div>

          <!-- Name -->
          <h1 class="heading-1 text-text-primary mb-4">
            <span class="gradient-text">{{ profile.name }}</span>
          </h1>

          <!-- Title -->
          <p class="text-xl md:text-2xl text-text-secondary mb-3 animate-slide-up" style="animation-delay: 0.1s;">
            {{ profile.title }}
          </p>

          <!-- Tagline -->
          <p class="text-lg md:text-xl text-primary font-medium mb-8 animate-slide-up" style="animation-delay: 0.2s;">
            {{ profile.tagline }}
          </p>

          <!-- Bio -->
          <p class="text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed text-lg animate-fade-in" style="animation-delay: 0.3s;">
            {{ profile.bio }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 justify-center animate-scale-in" style="animation-delay: 0.4s;">
            <NuxtLink to="/portfolio" class="btn-glow">
              View Projects
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-outline-glow">
              Get in Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section v-if="achievements" class="section-container">
      <div class="reveal">
        <div class="glass-card">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">{{ achievements.length }}+</div>
              <div class="text-text-secondary text-sm uppercase tracking-wider">Achievements</div>
            </div>
            <div class="text-center border-y md:border-y-0 md:border-x border-white/[0.06] py-6 md:py-0 group">
              <div class="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">{{ skills ? skills.languages.length : 0 }}+</div>
              <div class="text-text-secondary text-sm uppercase tracking-wider">Programming Languages</div>
            </div>
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">1</div>
              <div class="text-text-secondary text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section v-if="skills" class="section-container">
      <div class="reveal">
        <h2 class="heading-2 text-text-primary text-center mb-10">Tech Stack</h2>
      </div>
      <div class="reveal-stagger grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <div 
          v-for="lang in skills.languages.slice(0, 6)" 
          :key="lang.name"
          class="glass-card text-center p-5 group cursor-default"
        >
          <div class="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
            <UITechIcon :name="lang.name" :size="40" />
          </div>
          <div class="font-semibold text-text-primary text-sm">{{ lang.name }}</div>
          <div class="text-xs text-text-muted mt-1">{{ lang.proficiency }}%</div>
        </div>
      </div>
      <div class="text-center reveal">
        <NuxtLink to="/skills" class="btn-outline-glow">
          View All Skills
        </NuxtLink>
      </div>
    </section>

    <!-- Recent Achievements -->
    <section v-if="achievements" class="section-container">
      <div class="reveal">
        <h2 class="heading-2 text-text-primary text-center mb-10">Recent Achievements</h2>
      </div>
      <div class="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div 
          v-for="achievement in achievements.slice(0, 3)" 
          :key="achievement.title"
          class="glass-card group"
        >
          <div class="flex justify-center mb-4">
            <div 
              class="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
              :class="{
                'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 ring-1 ring-yellow-500/20': achievement.icon === 'trophy',
                'bg-gradient-to-br from-gray-400/20 to-gray-500/20 ring-1 ring-gray-400/20': achievement.icon === 'medal-silver',
                'bg-gradient-to-br from-orange-500/20 to-orange-600/20 ring-1 ring-orange-500/20': achievement.icon === 'medal-bronze',
                'bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-1 ring-purple-500/20': achievement.icon === 'code-bracket',
                'bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/20': achievement.icon === 'star',
              }"
            >
              <UIIcon :name="achievement.icon" size="lg" class="text-white" />
            </div>
          </div>
          <h3 class="text-lg font-bold text-text-primary mb-2">{{ achievement.title }}</h3>
          <p class="text-primary text-sm font-medium mb-2">{{ achievement.organization }}</p>
          <p class="text-text-secondary text-sm leading-relaxed">{{ achievement.description }}</p>
        </div>
      </div>
      <div class="text-center reveal">
        <NuxtLink to="/achievements" class="btn-outline-glow">
          View All Achievements
        </NuxtLink>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container text-center">
      <div class="reveal">
        <div class="glass-card max-w-3xl mx-auto py-16">
          <h2 class="heading-2 text-text-primary mb-4">Let's Work Together</h2>
          <p class="text-text-secondary mb-8 text-lg max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. Let's create something amazing!
          </p>
          <NuxtLink to="/contact" class="btn-glow">
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimations } from '~/composables/useScrollAnimations'

const { profile, skills, achievements } = useConfig()
useScrollAnimations()

// SEO
useHead({
  title: 'Home | Elang Permadi Lau',
  meta: [
    { name: 'description', content: 'Junior Software Engineer Portfolio' }
  ]
})
</script>
