<script setup lang="ts">
</script>

<template>
  <div class="flex bg-primary justify-between">
    <div class="mt-8 mb-3 ml-24 flex items-center space-x-8">
      <img src="/src/assets/img/Logo.png" />
      <nav class="font-body space-x-8">
        <router-link to="/home">Home</router-link>
        <router-link to="/todo">Todo</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
    
    <!-- Right-aligned elements -->
    <div class="mt-8 mr-24 flex space-x-8 items-center">
      <router-link to="/">Login</router-link>
      <button class="bg-sky-600 py-2 px-3 text-sm text-white border-sky-600 font-semibold hover:bg-sky-700 rounded">Sign Up</button>
    </div>
  </div>
</template>
