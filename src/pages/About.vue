<script setup>
  import { fetchData } from "../utils.js";

  // TODO: later, get this data from external database
  // const gallery
</script>

<template>
  <section id="about-overview" class="overview-card">
    <div class="profile-picture"/>

    <header>
      <h2>Hi there!</h2>
    </header>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?</p>
  </section>

  <section id="about-gallery">
    <header>
      <h2>Check out some of my work!</h2>
    </header>

    <div class="gallery-small">

      <div v-for="imgInfo in fetchData('src/data.json', 'gallery')" :key="imgInfo['header']" class="gallery-item">
        <img :src="imgInfo['url']">

        <div>
          <h3>{{imgInfo['header']}}</h3>
          <p>{{imgInfo['description']}}</p>
        </div>
      </div>

    </div>
  </section>

</template>

<style scoped>
.profile-picture {
  height: 300px;
  width: 200px;
  margin-right: 1.5rem;
  border-radius: 1rem;

  background-color: var(--color-background);
  float: left;
}
</style>