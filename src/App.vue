<script setup lang="ts">
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
</script>

<template>
  <header class="bg-gray-900 text-white flex justify-center pt-8 pb-2">
    <!-- <a id="skip-nav" href="#main-content">Skip to Content</a> -->
    <div class="contents md:hidden">
      <MenuIcon/>
    </div>
    <nav class="hidden md:flex mx-auto flex-wrap gap-x-8">
      <router-link class="hover:text-cyan-400" to="/">HOME</router-link>
      <router-link class="hover:text-cyan-400" to="/gallery">GALLERY</router-link>
      <router-link class="hover:text-cyan-400" to="/interests">INTERESTS</router-link>
      <router-link class="hover:text-cyan-400" to="/about">ABOUT</router-link>
      <router-link class="hover:text-cyan-400" to="/contact">CONTACT ME</router-link>
    </nav>
  </header>

  <router-view/>

  <footer class="absolute bottom-0 w-full mx-auto py-2 text-center bg-gray-900 text-white">
    This is a footer
  </footer>
</template>
