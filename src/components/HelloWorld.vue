<template>
  <div class="titleBox1">
    <h1>Acuamigos</h1>
  </div>
  <div class="homeContainer">
    <div class="item" :style="requirebackgroundImage('homeImage1.png')"></div>
    <div class="item" :style="requirebackgroundImage('OceanWallpaper.jpg')">
      <div class="center flex-column">
        <h5>Si quieres cuidar a tu amigo marino da click</h5>
        <router-link to="/acuamigos" class="btn btn-info" role="button"
          >Aquí</router-link
        >
        <br />
        <h5>Si quieres saber cómo ayudar a las especies marinas da click</h5>
        <router-link to="/informacion" class="btn btn-info" role="button"
          >Aquí</router-link
        >
      </div>
    </div>
    <div class="item" :style="requirebackgroundImage('homeImage2.png')"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    requirebackgroundImage(image) {
      console.log(image);
      const url = require(`@/assets/images/${image}`);
      console.log(`background-image: url('${url}')`);
      return `background-image: url('${url}')`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: rgb(174, 205, 251);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
