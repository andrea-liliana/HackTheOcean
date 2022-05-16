<template>
  <nav
    class="nav navbar fixed-top navbar-light"
    style="background-color: #e3f2fd"
  >
    <router-link to="/" class="navbar-brand">Stone Free</router-link>
    <div class="navbar" id="navbar">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Inicio</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/acuamigos" class="nav-link">Acuamigos</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/informacion" class="nav-link"
          >Información</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">Donaciones</router-link>
      </li>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
