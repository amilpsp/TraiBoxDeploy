<script setup>
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <v-app>
    <v-main class="flex flex-col min-h-screen bg-darkBg text-darkText">
      <Navbar class="flex flex-row" />
      <RouterView class="flex-grow content-center" />
      <Footer class="flex justify-center bg-dark" />
    </v-main>
  </v-app>
</template>
