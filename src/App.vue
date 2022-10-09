<script setup>
  const getNavTabClass = (route, actualRoute) => {
    if (route === actualRoute) {
      return 'navigation-bar-tab active';
    }
    return 'navigation-bar-tab';
  }

</script>

<template>
  <div>
    <h4 class="website-logo">Melodie Jin</h4>
  </div>

  <nav class="page-navigation-bar">
    <ul>
      <router-link to="/" :class="getNavTabClass('/', this.$route.path)">About</router-link>
      <router-link to="/gallery/" :class="getNavTabClass('/gallery/', this.$route.path)">Gallery</router-link>
      <router-link to="/hobbies/" :class="getNavTabClass('/hobbies/', this.$route.path)">Hobbies</router-link>
    </ul>
  </nav>

  <router-view/>

  <footer>
    <div class="horiz-divider"/>
    <p>This is a footer</p>
  </footer>
</template>

<style scoped>
  .website-logo {
    margin-block: 0;
    padding-inline: 0;
  }
  .page-navigation-bar {
    margin: 0;
  }
  .page-navigation-bar ul {
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

  .horiz-divider {
    width: 100%;
    height: 0.1rem;
    background-color: var(--color-primary);
    margin: 1rem 0;
    border-radius: 1.5rem;
  }

  footer p {
    /* opacity: 50%; */
    text-align: center;
  }
</style>