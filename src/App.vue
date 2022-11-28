<script setup lang="ts">
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
</script>

<template>
  <header class="sticky top-0 bg-gray-900 text-white flex justify-center pt-8 pb-2">
    <!-- <a id="skip-nav" href="#main-content">Skip to Content</a> -->
    <div class="contents md:hidden">
      <MenuIcon/>
    </div>
    <nav class="hidden md:flex mx-auto flex-wrap gap-x-8">
      <router-link class="hover:underline hover:underline-offset-4" to="/">HOME</router-link>
      <router-link class="hover:underline hover:underline-offset-4" to="/gallery">GALLERY</router-link>
      <router-link class="hover:underline hover:underline-offset-4" to="/interests">INTERESTS</router-link>
      <router-link class="hover:underline hover:underline-offset-4" to="/about">ABOUT</router-link>
      <router-link class="hover:underline hover:underline-offset-4" to="/contact">CONTACT ME</router-link>
    </nav>
  </header>

  <main class="min-h-screen -mb-16">
    <router-view/>
  </main>

  <footer class="w-full h-16 mx-auto py-2 text-center bg-gray-900 text-white flex flex-wrap place-content-center gap-x-2">
    <a href="https://www.linkedin.com/in/melodiejin/" class="hover:underline hover:underline-offset-4">LinkedIn</a>
    |
    <a href="https://github.com/melodiexj" class="hover:underline hover:underline-offset-4">GitHub</a>
    |
    <span>melodiej@umich.edu</span>
  </footer>
</template>
