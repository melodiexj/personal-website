<script lang="ts">

</script>

<template>
<section id="overview">
  <h1>WELCOME</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet ut quam voluptate molestias! Deleniti, error. Dolor atque voluptate accusantium vitae saepe quia autem perspiciatis? Soluta praesentium ab officia natus? Sit, aspernatur iure non totam necessitatibus cum! Consequuntur at laboriosam, alias officiis, enim tenetur earum doloremque totam eius quibusdam expedita ex rerum dicta impedit aspernatur nisi esse quo, omnis maiores velit? Quos nisi, placeat ea recusandae deleniti eveniet inventore minus.</p>
</section>

<section id="section1-work" class="grid">
  <h2>1. Check out some of my work</h2>
  <div class="carousel horizontal-center">
    <div>
      [TODO: place carousel here]
    </div>

    <router-link to="/gallery" class="button-lg">
      see more in the gallery
    </router-link>
  </div>

</section>

<section id="section2-about" class="inverted-colors">
  <h2>2. Learn more about me</h2>
  <router-link to="/about" class="horizontal-center button-xl my-8">
    to "About Me"
  </router-link>
</section>

<section id="section3-other">
  <h2>or 3. See the other things that I do for fun</h2>
  <div class="display-bar-left">
    [TODO: place left display bar here]
  </div>
  <div class="display-bar-right">
    [TODO: place right display bar here]
  </div>
  <div class="display-bar-left">
    [TODO: place left display bar here]
  </div>
</section>
</template>
