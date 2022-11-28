<script lang="ts">
  import { defineAsyncComponent } from "vue";

  export default {
    components: {
      MenuIcon: defineAsyncComponent(() => import("vue-material-design-icons/Menu.vue")),
    },
    methods: {
      getNavBarLinkClassName (linkContent: string) {
        if (this.$route.path === `\/${linkContent.toLowerCase()}`) {
          return "underline underline-offset-4 cursor-default";
        } else {
          return "hover:underline hover:underline-offset-4";
        }
      }
    }
  }
</script>

<template>
  <header class="sticky top-0 bg-gray-900 text-white flex justify-center pt-8 pb-2">
    <!-- <a id="skip-nav" href="#main-content">Skip to Content</a> -->
    <div class="contents md:hidden">
      <MenuIcon/>
    </div>
    <nav class="hidden md:flex mx-auto flex-wrap gap-x-8">
      <router-link :class="getNavBarLinkClassName('')" to="/">HOME</router-link>
      <router-link :class="getNavBarLinkClassName('EXPERIENCES')" to="/experiences">EXPERIENCES</router-link>
      <router-link :class="getNavBarLinkClassName('BLOG')" to="/blog">BLOG</router-link>
      <router-link :class="getNavBarLinkClassName('HOBBIES')" to="/hobbies">HOBBIES</router-link>
      <!-- <router-link class="hover:underline hover:underline-offset-4" to="/about">ABOUT</router-link>
      <router-link class="hover:underline hover:underline-offset-4" to="/contact">CONTACT ME</router-link> -->
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
