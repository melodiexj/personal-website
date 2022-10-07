<script>
  import { fetchData } from "../utils";

  export default {
    data() {
      return {
        imgData: [],
      };
    },
    created() {
      fetchData('src/data.json', 'gallery')
        .then(data => this.imgData = data);
    },
  };
</script>

<template>
  <section id="gallery-overview" class="overview-card">
    <header>
      <h2>Gallery of Work</h2>
    </header>

  </section>

  <section class="gallery-large" v-if="imgData">
    <div v-for="imgInfo in imgData" :key="imgInfo.id" class="gallery-item">
      <img :src="imgInfo['url']">

      <div>
        <h3>{{imgInfo['header']}}</h3>
        <p>{{imgInfo['description']}}</p>
      </div>
    </div>

  </section>

</template>
