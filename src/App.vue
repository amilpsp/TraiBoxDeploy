<script setup>
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";
  
</script>

<template>
  <body>
    <main class="flex flex-col min-h-screen bg-darkBg text-darkText">
      <Navbar class="flex flex-row" />
      <RouterView/>
      <Footer class="flex justify-center bg-dark" />
    </main>
  </body>
</template>
