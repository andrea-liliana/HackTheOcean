<template>
  <div id="nav">
    <the-header></the-header>
  </div>
  <router-view />
  <the-footer></the-footer>
</template>
<script>
import TheFooter from "./components/SingleComponents/TheFooter.vue";
import TheHeader from "./components/SingleComponents/TheHeader.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
