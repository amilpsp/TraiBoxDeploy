<script setup>
   import LinkedInIcon from "../components/LinkedInIcon.vue";
   import FbIcon from "../components/FbIcon.vue";
   import TwitterIcon from "../components/TwitterIcon.vue";
</script>
<template>
  <section id="component-container" class="flex flex-row flex-wrap gap-5 text-center h-auto">
    <div id="links" class="flex text-[#eee] order-1 w-full justify-center gap-3 md:gap-10 flex-wrap">
      <router-link to="/">Home</router-link>
      <router-link to="/our-product">Our product</router-link>
      <router-link to="/about-us">About Us</router-link>
      <router-link to="/faq">FAQ</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </div>
  
    <div id="socials" class="-order-1 md:order-2 text-start flex-grow">
      <h4 class="text-white text-xl font-semibold pb-3">FOLLOW US</h4>
      <div class="flex flex-row gap-3">
        <LinkedInIcon/>
        <FbIcon/>
        <TwitterIcon/>
      </div>
    
    </div>
    <div id="terms" class="flex flex-col items-end md:flex-row justify-end order-3 flex-grow gap-3 md:gap-10 text-start md:text-center">
      <router-link to="/legal-information">Privacy Policy</router-link>
      <router-link to="/legal-information">Terms of Service</router-link>
      <router-link to="/legal-information">Compliance Certifications</router-link>
    </div>
  </section>
</template>
