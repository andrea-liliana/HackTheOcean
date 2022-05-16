<template>
  <section class="acuamigossection">
    <!-- header -->
    <h1
      style="
        font-family: 'Lobster', cursive;
        color: rgb(132, 132, 240);
        text-align: center;
        padding-top: 100px;
        font-size: 150px;
      "
    >
      Acuamigos
    </h1>
    <h2 style="text-align: center">Selecciona tu acuamigo</h2>
    <!-- Seleccion -->
    <div class="section-title-divider" style="padding-top: 100px"></div>
    <div class="container-productos" style="padding-bottom: 200px">
      <div class="new-card bg-white">
        <a href="tortuga.html">
          <img src="@/assets/img/tortuga.jpg" />
        </a>
      </div>

      <div class="new-card bg-white">
        <a href="tiburon.html">
          <img src="@/assets/img/tiburon.jpg" />
        </a>
      </div>

      <div class="new-card bg-white">
        <a href="coral.html">
          <img src="@/assets/img/coral.jpg" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import "@/assets/styles/pokedex.css";
import "@/assets/styles/selecion.css";
export default {
  title: "Acuamigos",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
</style>
