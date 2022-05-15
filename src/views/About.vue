<template>
  <section>
    <div class="titleBox1">
      <h1>Aprende más sobre algunos animales en peligro de extinción</h1>
    </div>
    <div class="imagesContainer">
      <div class="animal" :style="requirebackgroundImage('ocean.jpg')"></div>
      <div
        class="animal1"
        :style="requirebackgroundImage('seaHorse.jpg')"
      ></div>
      <div class="animal2" :style="requirebackgroundImage('seaWolf.jpg')"></div>
      <div class="animal3" :style="requirebackgroundImage('whale.jpg')"></div>
      <div class="animal4" :style="requirebackgroundImage('dolphin.jpg')"></div>
      <div
        class="animal5"
        :style="requirebackgroundImage('vaquitaPorpoise.jpg')"
      ></div>
      <div class="animal6" :style="requirebackgroundImage('turtle.jpg')"></div>
      <div class="animal7" :style="requirebackgroundImage('fish.jpg')"></div>
    </div>
    <div class="titleBox">
      <h1>Algunos consejos para cuidarlos son...</h1>
    </div>

    <div class="notesContainer">
      <div class="note" v-for="(note, index) in notes" :key="index">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                :src="require(`@/assets/images/${note.link}`)"
                :alt="note.alt"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="flip-card-back">
              <br /><br /><br /><br />
              <h3>{{ note.h3 }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="titleBox">
      <h1>Aprende más sobre la preservación de la fauna marina</h1>
    </div>
    <div class="videosContainer">
      <div class="videoItem" v-for="(video, index) in videos" :key="index">
        <iframe
          width="560"
          height="315"
          :src="video.src"
          :title="video.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  title: "About",
  methods: {
    requirebackgroundImage(image) {
      console.log(image);
      const url = require(`@/assets/images/${image}`);
      console.log(`background-image: url('${url}')`);
      return `background-image: url('${url}')`;
    },
  },
  data() {
    return {
      backgroundImage: "",
      notes: [
        {
          link: "turtleBag.jpg",
          alt: "Tortuga",
          h3: "tiliza menos productos de plástico",
        },
        {
          link: "seaHorseStick.jpg",
          alt: "CaballitoMar",
          h3: "No tires basura en las playas",
        },
        {
          link: "crabPlastics.jpg",
          alt: "Cangrejo",
          h3: "Viaja por el mar con responsabilidad",
        },
        {
          link: "corals.jpg",
          alt: "Corales",
          h3: "Conoce más sobre los océanos y la vida marina",
        },
        {
          link: "beach.jpg",
          alt: "Playa",
          h3: "Ayuda a cuidar las playa",
        },
        {
          link: "seaStar.jpg",
          alt: "EstrellaMar",
          h3: "No compres productos que exploten la vida marina",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/nw6UMYxq8Xs",
          title: "Youtube video player",
        },
        {
          src: "https://www.youtube.com/embed/856jqL8-m5E",
          title: "Youtube video player",
        },
        {
          src: "https://www.youtube.com/embed/xguRtItnRXI",
          title: "Youtube video player",
        },
        {
          src: "https://www.youtube.com/embed/h9Lw2wpZEwE",
          title: "Youtube video player",
        },
      ],
    };
  },
};
</script>
<style>
body {
  background-color: rgb(174, 205, 251);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>
