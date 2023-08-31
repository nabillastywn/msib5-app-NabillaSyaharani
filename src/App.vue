<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const defaultFontFamily = "Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif"; // Define the font family
</script>

<template>
  <div class="main h-screen">
    <div class="wrapper">
      <nav class="nav">
        <ul>
          <li><router-link class="nav-link" to="/" :class="{ 'active': $route.path === '/' }">Home</router-link></li>
          <li><router-link class="nav-link" to="/todo" :class="{ 'active': $route.path === '/todo' }">Todo</router-link></li>
          <li><router-link class="nav-link" to="/about" :class="{ 'active': $route.path === '/about' }">About</router-link></li>
        </ul>
      </nav>
      <span class="line"></span>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.main {
  font-family: var(--defaultFontFamily); /* Use the defined font family */
  /* ... other styles ... */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242424 !important;
  color-scheme: light dark;
  color: white;
}

.wrapper {
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  gap: 24px;
}

.line {
  background-color: white;
  height: 1px;
  width: 100%;
}

.nav {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 24px;
}

.nav ul {
  list-style-type: none;
  display: flex;
  gap: 280px;
  margin: 0;
}

.nav-link {
  padding: 10px;
  color: white;
  text-decoration: none;
  font-weight: normal;
  font-family: Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif; /* Set the font family */
}

.nav-link.active {
  font-weight: bold;
}

.nav-link:hover {
  opacity: 0.8;
}
</style>
