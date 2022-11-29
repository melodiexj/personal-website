<script lang="ts">
import { defineComponent } from 'vue';
export default({

})
</script>

<template>
<section id="overview" class="mx-auto max-w-4xl w-4/5 mb-16 mt-4">
  <img src="/src/assets/blue-pfp.jpeg" alt="picture of me, Melodie" class="w-1/3 float-right ml-6 mb-6"/>
  <h1 class="text-4xl font-semibold my-8">
    Hey, there! I'm Melodie
  </h1>
  <p class="mb-4">
    ... and I am a fourth year undergraduate student at the University of
    Michigan in Ann Arbor, USA majoring in Computer Science. I want to
    become a software/web developer that creates tools and spaces that are
    accessible to a diverse user base and empowering them to achieve their
    goals.
  </p>
  <p class="mb-4">
    At Umich, I have taken a range of classes, such as
    <span class="italic">Data Structures & Algorithms</span>,
    <span class="italic">Introduction to Machine Learning</span>,
    <span class="italic">Web Systems</span>,
    <span class="italic">Database Management Systems</span>, and
    <span class="italic">Software Engineering</span>.
    And I have had the opportunity to apply and further develop my skills through
    internships, including one at an early startup and another in consulting services.
  </p>
  <p class="mb-4">
    When I am not working or studying, I enjoy playing video games (recently
    Genshin Impact and Arknights), as well as making and eating sweets.
  </p>
</section>

<section id="section1-work" class="mx-auto max-w-4xl w-4/5 mt-4 grid">
  <h2 class="text-2xl font-semibold mb-4">
    About this site
  </h2>
  <div class="">
    <div>
      <p class="mb-4">
        This website is still early in development and thus a little empty at the moment.
      </p>
      <p>
        For those that may be curious, I created these web pages using:
      </p>
      <ul class="ml-8 list-inside">
        <li class="list-disc my-1">Vue: as the Javascript framework for making a declarative front end</li>
        <li class="list-disc my-1">Vite: for build the source code (and better developer experience)</li>
        <li class="list-disc my-1">Tailwind for CSS utility classes and components</li>
      </ul>
      <a href="https://github.com/melodiexj/personal-website" class="underline">
        See the full source code for this website on GitHub
      </a>
    </div>
  </div>
</section>

</template>
