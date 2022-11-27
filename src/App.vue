<script setup lang="ts">
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
</script>

<template>
  <header>
    <!-- <a id="skip-nav" href="#main-content">Skip to Content</a> -->
    <div class="sm-invisible content-container">
      <MenuIcon/>
    </div>
    <div class="sm-visible">
      <nav class="navigation-bar content-container">
        <router-link class="link" to="/">HOME</router-link>
        <router-link class="link" to="/gallery">GALLERY</router-link>
        <router-link class="link" to="/interests">INTERESTS</router-link>
        <router-link class="link" to="/about">ABOUT</router-link>
        <router-link class="link" to="/contact">CONTACT ME</router-link>
      </nav>
    </div>
  </header>

  <router-view id="main-content"/>

  <footer class="content-container">
    This is a footer
  </footer>
</template>
