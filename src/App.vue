<script setup lang="ts">

</script>

<template>
  <header>
    <!-- <a id="skip-nav" href="#main-content">Skip to Content</a> -->
    <nav class="navigation-bar">
      <router-link to="/">HOME</router-link>
      <router-link to="/gallery">GALLERY</router-link>
      <router-link to="/interests">INTERESTS</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/contact">CONTACT ME</router-link>
    </nav>
    <!-- <span class="website-logo">Melodie Jin</span> -->
  </header>

  <router-view id="main-content"/>

  <footer>
    This is a footer
  </footer>
</template>
