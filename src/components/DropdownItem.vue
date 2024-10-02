<script setup>
import { ref, computed } from 'vue';
const open = ref(false);
function invertState() {
    open.value = !open.value;
}
</script>

<template>
  <div class="bg-zinc-800/50 my-4 rounded-md ">
    <h4 
      @click="invertState" 
      class="cursor-pointer flex items-center font-bold text-white text-xl px-4 py-3 lg:text-2xl">
      <slot name="header"></slot>
      <!-- Optional arrow icon animation -->
      <!-- <img :class="{ 'rotate-180': open }" src="/src/assets/images/icon-arrow-down.svg" alt="" /> -->
    </h4>
    
    <!-- Smooth dropdown animation -->
    <transition name="dropdown">
      <p v-show="open" class="lg:mr-0 py-3 px-6">
        <slot></slot>
      </p>
    </transition>

    <!-- <hr class=" mt-3 mb-4 border-2 border-zinc-700" /> -->
  </div>
</template>

<!-- <style scoped>
.dropdown-enter-active, .dropdown-leave-active {
    opacity: 0;
    transition: 0.4s linear;
}

.dropdown-enter-from, .dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}

.dropdown-enter-to, .dropdown-leave-from {
  max-height: 500px; 
  opacity: 1;
 
}
</style> -->
<!-- <script setup>
import { ref, computed } from 'vue';
const open = ref(false);
function invertState() {
    open.value = !open.value;
}
</script>
<template>
    <div class="px-3 lg:px-20 ">
        <h3 @click="invertState" :class="{ 'font-bold': open }"
            class="cursor-pointer my-3.5 flex items-center justify-between font-semibold text-white">
            <slot name="header"></slot> -->
            <!-- <img :class="{ 'rotate-180': open }" src="/src/assets/images/icon-arrow-down.svg" alt="" /> -->
    <!--     </h3>
        <p v-if="open" class="lg:mr-0 lg:text-left my-3.5 text-lg text-gray-203">
            <slot></slot>
        </p>
        <hr class="my-3.5" />
    </div>
</template> -->