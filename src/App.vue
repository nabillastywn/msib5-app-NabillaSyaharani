<script setup lang="ts">
import { RouterView } from 'vue-router'
import './tailwind.css'
import './main.ts'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="bg-white">
    <Navbar />
    <!-- Use the Navbar component here -->
    <router-view />
    <!-- Include the Footer component here -->
    <Footer />
  </div>
</template>


<!-- <template>
  <div class=" w-[1440px] bg-gradient-to-r from-primary to-secondary h-screen flex flex-col justify-center items-center"> -->
    <!-- Logo and Nav Links in a row -->
    
      <!-- <div class="flex flex-col items-center h-80 text-white text-center space-y-4">
        <div class="logo">
        <img src="./assets/img/Content.png" alt="Logo" class="h-8 w-8" />
        <img src="./assets/img/Logotype.png" alt="Logo" class="h-8 w-8" />
        <router-link to="/" class="mt-2">Home</router-link>
        <router-link to="/todo" class="mt-2">Todo</router-link>
        <router-link to="/about" class="mt-2">About</router-link>
      </div>
      </div> -->

      <!-- Add margin to the main content -->
      <!-- <div class="wrapper">
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template> -->

<style scoped>
.bg-gradient-to-r {
  background: linear-gradient(to bottom, #D8EEFD, #ffffff);
}

/* .main {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  color-scheme: light dark;
}

.wrapper {
  font-family: 'Poppins', sans-serif;
  margin: 30px 80px;
  display: flex;
  flex-direction: column;
  width: 80vw;
  gap: 24px;
}

/* Add margin to the router-link elements */
/* .router-link {
  margin-top: 100px;
} */

/* .main-content {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: normal;
  font-family: 'Poppins', sans-serif;
}

.nav-link.active {
  font-weight: bold;
}

.nav-link:hover {
  opacity: 0.8;
} */
</style>
