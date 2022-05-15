<template>
  <section class="animalsContainerSection">
    <div class="imagesContainer">
      <div
        class="animal"
        style="background-image: url('@assets/images/ocean.jpg')"
      ></div>
      <div
        class="animal1"
        style="background-image: url(@assets/images/seaHorse.jpg)"
      ></div>
      <div
        class="animal2"
        style="background-image: url(@assets/images/seaWolf.jpg)"
      ></div>
      <div
        class="animal3"
        style="background-image: url(@assets/images/whale.jpg)"
      ></div>
      <div
        class="animal4"
        style="background-image: url(@assets/images/dolphin.jpg)"
      ></div>
      <div
        class="animal5"
        style="background-image: url(@assets/images/vaquitaPorpoise.jpg)"
      ></div>
      <div
        class="animal6"
        style="background-image: url(@assets/images/turtle.jpg)"
      ></div>
      <div
        class="animal7"
        style="background-image: url('~assets/images/fish.jpg')"
      ></div>
    </div>
    <div class="notesContainer">
      <div class="note">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                :src="require(`@/assets/images/turtleBag.jpg`)"
                alt="Tortuga"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <br /><br />
              <h3>Utiliza menos productos de plástico</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="@assets/images/seaHorseStick.jpg"
                alt="CaballitoMar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <br /><br />
              <h3>No tires basura en las playas</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="@/assets/images/crabPlastics.jpg"
                alt="Cangrejo"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <br /><br />
              @/assets/images/crabPlastics.jpg
              <h3>Viaja por el mar con responsabilidad</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="@assets/images/corals.jpg"
                alt="Corales"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <h3>Conoce más sobre los océanos y la vida marina</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="@assets/images/beach.jpg"
                alt="Playa"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <br /><br />
              <h3>Ayuda a cuidar las playas</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="@assets/images/seaStar.jpg"
                alt="EstrellaMar"
                style="width: 200px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <h3>No compres productos que exploten la vida marina</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.animalsContainerSection {
  background-color: rgb(174, 205, 251);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
