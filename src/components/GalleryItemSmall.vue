<script setup>
const props = defineProps({
  data: Object,
})

</script>

<template>
<div class="gallery-item">
  <img :src="data['url']">

  <div>
    <h3>{{data['header']}}</h3>
    <p>{{data['description']}}</p>
  </div>
</div>
</template>