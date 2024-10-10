<script setup>
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";
  
</script>

<template>
  <body class="">
    <main class="flex flex-col min-h-screen bg-[#010108] text-darkText">
      <Navbar class="flex flex-row" />
      <RouterView/>
      <Footer class="flex justify-center bg-[#03030f]" />
    </main>
  </body>
</template>
