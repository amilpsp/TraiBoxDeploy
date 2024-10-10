<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const isMenuOpen = ref(false);
  const isDropdownOpen = ref(false);
  const isScrolled = ref(false);

  // Reference for the dropdown container
  const dropdownRef = ref(null);

  // Method to toggle the mobile menu
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  // Method to toggle the dropdown menu
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };

  // Method to close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      isDropdownOpen.value = false;
    }
  };

  // Method to check scroll position
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
  };

  // Attach event listeners
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
  });

  // Clean up the event listeners when the component is destroyed
  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<template>
  <nav
    :class="['flex w-[95%] py-3 px-3 mt-2 self-center justify-between items-center rounded-full fixed z-50 transition-colors duration-300', 
      isScrolled ? 'bg-midToneBg' : 'bg-transparent']"
  >
    <!-- Logo with link to home-->
    <router-link to="/" class="hover:text-[#c3e2ff] text-2xl font-bold">
      TraiBox
    </router-link>

    <!-- Desktop Navigation Links -->
    <section 
      id="desktop-nav-links" 
      class="hidden md:flex lg:text-xl w-fit justify-around items-center gap-5 lg:gap-12">
      
      <router-link class="hover:text-[#c3e2ff] text-white" to="/">Home</router-link>
      <router-link class="hover:text-[#c3e2ff] text-white" to="/our-product">Our Product</router-link>
      <router-link class="hover:text-[#c3e2ff] text-white" to="/investors">Investors</router-link>

      <router-link class="hover:text-[#c3e2ff] text-white" to="/about-us">
        About Us
      </router-link>
      <router-link class="hover:text-[#c3e2ff] text-white" to="/faq">
        FAQ
      </router-link>
      
    </section>

    <router-link
      class="hidden md:flex lg:text-xl hover:text-accent text-white"
      to="/contact"
    >
    <TraiButton text="Contact Us"/>
    </router-link>

    <!-- Mobile Hamburger Menu Button -->
    <div class="md:hidden cursor-pointer" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>

    <!-- Overlay Menu for Mobile -->
    <section
      id="mobile-overlay"
      v-if="isMenuOpen"
      class="fixed text-3xl inset-0 bg-[#02010a] bg-opacity-95 p-5 flex flex-col items-end justify-center space-y-6 z-50"
    >
      <!-- Close Button -->
      <div class="absolute top-5 right-5 cursor-pointer" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <!-- Mobile Navigation Links -->
      <router-link to="/" @click="toggleMenu">Home</router-link>
      <router-link to="/our-product" @click="toggleMenu">Our Product</router-link>

      
      <router-link to="/investors" @click="toggleMenu">Investors</router-link>
      <router-link to="/about-us" @click="toggleMenu">About Us</router-link>
      <router-link to="/faq" @click="toggleMenu">FAQ</router-link>
      <router-link to="/contact" @click="toggleMenu">Contact Us</router-link>
      
    </section>
  </nav>
</template>
