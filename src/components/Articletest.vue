<template>
   <!--  <article class="bg-blue-800/20 flex flex-col justify-center sm:flex-row sm:gap-10 py-8">
        <img src="/our-product/quick.png" class="w-[11rem] object-contain hidden sm:block mx-4">
        <div class="p-5 flex flex-col justify-center items-center gap-6 sm:gap-3 sm:w-[30rem] sm:items-start">
          
            <img src="/our-product/quick.png" class="w-[9rem] object-contain sm:hidden">
            <h4 class="text-white text-center font-semibold text-[1.5rem] sm:text-left">Quick and Easy Financing Access</h4>
            <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?</p>
        </div>
    </article> -->
    <article class="bg-blue-800/20 flex flex-col justify-center py-6 rounded-lg px-5 gap-6 sm:gap-5 sm:w-[20rem] sm:items-start">
<!--  
        <img :src=picture_src  class="w-[6rem] object-contain hidden sm:block mx-4"> -->
       
      <!--   <div class="p-5 flex flex-col justify-center  gap-6 sm:gap-5 sm:w-[20rem] sm:items-start"> -->
          
            <img :src=picture_src  class="w-[4rem] object-contain " />
            <h4 class="text-white font-semibold text-[1.2rem] sm:text-left">{{title}}</h4>
            <p class="text-zinc-300">{{paragr}}</p>
<!--         </div> -->
    </article>
</template>
<script setup>
const props = defineProps(
    {
        paragr: String,
        title: String,
        picture_src: String
    }
    )
</script>