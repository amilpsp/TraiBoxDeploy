<template>
    <article class="glassEffect flex flex-col justify-center py-4 rounded-lg px-5 gap-4 sm:gap-5 sm:max-w-lg sm:items-start shadow-lg">

            <div class="flex flex-col lg:flex-row lg:gap-4">
            <img :src=picture_src :alt=alt_desc class="w-[2.5rem] object-contain "/>
            <h4 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-[1.2rem] sm:text-left">{{title}}</h4>
            </div>
            <p class="text-blue-200/90">{{paragr}}</p>
    </article>
</template>
<script setup>
const props = defineProps(
    {
        paragr: String,
        title: String,
        picture_src: String,
        alt_desc: String
    }
    )
</script>
<style scoped>
.glassEffect{
  background: rgba(2, 92, 247, 0.11);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(3, 58, 153, 0.27);
}
</style>