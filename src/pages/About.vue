<script setup>

    // TODO: later, get this data from external database
    const galleryImages = [
      {
        url: "/src/assets/gallery/Children_of_the_Sky.png",
        header: "Scene from 'Children of the Sky'",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?",
      },
      {
        url: "/src/assets/gallery/moon_over_the_mountains.png",
        header: "Study: contrasting colors",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?",
      },
      {
        url: "/src/assets/gallery/peach_sky_mountains.png",
        header: "Study: soft/hard edges",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?",
      },
      {
        url: "/src/assets/gallery/sunset.png",
        header: "Study: Color transition",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?",
      },
    ]

  </script>

  <template>
    <h1>ABOUT</h1>

    <section id="about-me-card" class="card-filled">
      <div id="profile-picture"/>

      <header>
        <h2>Hi there!</h2>
      </header>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas placeat dolorum atque, at quidem reiciendis velit alias inventore fuga earum unde eaque ipsa ad. Maxime animi quod optio! Ullam, aperiam?</p>
    </section>

    <section id="about-me-gallery">
      <header>
        <h2>Check out some of my work!</h2>
      </header>

      <div class="gallery-small">

        <div v-for="imgInfo in galleryImages" :key="imgInfo['header']" class="gallery-item">
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
  #profile-picture {
    height: 300px;
    width: 200px;
    margin-right: 1.5rem;
    border-radius: 1rem;

    background-color: var(--color-background);
    float: left;
  }
  </style>