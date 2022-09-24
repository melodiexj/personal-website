<script setup>
  const getNavTabClass = (route, actualRoute) => {
    if (route === actualRoute) {
      console.log(route)
      return 'navigation-bar-tab active';
    }
    return 'navigation-bar-tab';
  }

</script>

<template>
  <nav id="page-navigation-bar">
    <ul>
      <router-link to="/" :class="getNavTabClass('/', this.$route.path)">About</router-link>
      <router-link to="/gallery/" :class="getNavTabClass('/gallery/', this.$route.path)">Gallery</router-link>
      <router-link to="/hobbies/" :class="getNavTabClass('/hobbies/', this.$route.path)">Hobbies</router-link>
    </ul>
  </nav>

  <router-view/>
</template>

<style scoped>
  #page-navigation-bar {
    margin: 0;
  }
  #page-navigation-bar ul {
    margin-block-end: 0;
    padding-inline: 0;
  }
  .navigation-bar-tab {
    background-color: var(--color-primary-dark);
    color: var(--color-background);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    margin-right: 0.25rem;
    text-decoration: none;
  }
  .navigation-bar-tab.active {
    background-color: var(--color-primary);
  }

</style>