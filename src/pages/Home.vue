<script lang="ts">

</script>

<template>
<section id="overview" class="mx-auto w-4/5 mb-16 mt-4">
  <h1 class="text-4xl font-semibold my-8">
    WELCOME
  </h1>
  <p>
    Hey there! My name is Melodie and I am a fourth year undergraduate student interested in software and web development to create tools that empower people
  </p>
</section>

<section id="section1-work" class="mx-auto w-4/5 mb-16 mt-4 grid">
  <h2 class="text-xl font-semibold">
    1. Check out some of my work
  </h2>
  <div class="carousel justify-self-center">
    <div>
      [TODO: place carousel here]
    </div>

    <router-link to="/gallery" class="button-lg">
      see more in the gallery
    </router-link>
  </div>

</section>

<section id="section2-about" class="bg-gray-900 text-white py-1 mb-16 mt-4">
  <div class="mx-auto w-4/5 mb-16 mt-4 grid">
    <h2 class="text-xl font-semibold">
      2. Learn more about me
    </h2>
    <router-link to="/about" class="justify-self-center button-xl my-4">
      to "About Me"
    </router-link>
  </div>
</section>

<section id="section3-other" class="mx-auto w-4/5 mb-16 mt-4 grid">
  <h2 class="text-xl font-semibold">
    3. See the other things that I do for fun
  </h2>
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
