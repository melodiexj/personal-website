<script>
import { fetchData } from "../utils";
import GalleryItemLarge from "../components/GalleryItemLarge.vue";

export default {
  components: { GalleryItemLarge },
  data() {
    return {
      imgData: [],
    };
  },
  created() {
    fetchData("src/data.json", "gallery")
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
    <GalleryItemLarge
      v-for="imgInfo in imgData" :key="imgInfo.id" :data="imgInfo"
    />

  </section>

</template>
