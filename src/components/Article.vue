<template>
    <article class="flex flex-row flex-wrap justify-around items-center gap-3 md:grid md:grid-cols-12 md:px-24 md:gap-x-10 xl:px-48 2xl:px-[24%] ">
      <div :class="'flex h-full items-end '+(imgLeft?'col-start-6 col-span-7':'col-start-1 col-span-7')"><h3 class="max-w-15">{{header}}</h3></div>
      <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" :class="'max-w-48'+(imgLeft?' row-start-1 row-span-2 col-start-1 col-span-5 ': 'row-start-1 row-span-2 col-start-8 col-span-5') ">
      <div v-if="!imgSrc" :class="'bg-midLightBg h-[15vh] w-[30vh] md:h-full md:w-full ' + (imgLeft?' row-start-1 row-span-2 col-start-1 col-span-5 ': 'row-start-1 row-span-2 col-start-8 col-span-5') ">.</div>
      <p :class="'flex h-full items-start'+(imgLeft?'col-start-6 col-span-7':'col-start-1 col-span-7')">{{textContent}}</p>
    </article>
</template>
<script setup>
  const props = defineProps({
    header:String, 
    textContent:String, 
    imgLeft:Boolean,
    imgSrc: String,
    imgAlt: String
  })
</script>