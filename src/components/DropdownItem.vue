<script setup>
import { ref, computed } from 'vue';
const open = ref(false);
function invertState() {
    open.value = !open.value;
}
</script>

<template>
  <div class="glassEff my-4 rounded-md ">
    <h4 
      @click="invertState" 
      class="cursor-pointer flex items-center font-semibold text-[#eee] text-xl px-4 py-3 lg:text-xl">
      <slot name="header"></slot>
    </h4>
    <p v-show="open" class="lg:mr-0 py-3 px-6">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped>
.glassEff{
  background: rgba(0, 78, 212, 0.11);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}
</style>