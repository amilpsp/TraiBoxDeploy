
<template>
  <section class="flex flex-row flex-wrap justify-center md:items-center py-20 px-4 xl:py-24 2xl:py-36 bg-gradient-to-br from-indigo-800/30 to-zinc-900/50 ">
    <div class=" flex flex-row flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 ">
      <h1 class="text-center leading-tight w-full bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-violet-400 my-9">Solutions that fit your needs</h1>
      <article class="expand-hover bg-zinc-800/80 hover:bg-zinc-800/60  w-40 rounded-lg py-4 px-2 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-white font-semibold lg:text-2xl">Large Enterprises</h2>
        <div class="p-3 w-[5rem] lg:w-[7rem]">
          <img src="/our-product/LE.png"/>
      
        </div>
      </article>

      <article class="expand-hover bg-zinc-800/80 hover:bg-zinc-800/70 w-40 rounded-lg py-4 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-white font-semibold lg:text-2xl">SMEs</h2>
        <div class="p-3 w-[5rem] lg:w-[7rem]">
          <img src="/our-product/SMEs2.png"/>
        </div>
      </article>

      <article class="expand-hover bg-zinc-800/80 hover:bg-zinc-800/70 w-40 rounded-lg py-4 flex flex-col items-center gap-3 justify-center lg:py-6 lg:w-60">
        <h2 class="text-lg text-center text-white font-semibold lg:text-2xl">Trade Finance Providers</h2>
        <div class=" p-3 w-[5rem] lg:w-[7rem]">
          <img src="/our-product/TFP.png"/>
        </div>
      </article>
    </div>
  </section>
  <section class="flex flex-col  py-16 px-2 min-h-screen gap-10 bg-blue-950/60">
    <h2 class="text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 xl:text-[2.2rem]">For Small and Medium Enterprises</h2>
    <div  class="flex flex-col justify-center gap-8  lg:flex-row-reverse items-center ">
      <img src="/our-product/suitcase.svg" class=" max-w-xl -hue-rotate-90"/>
      <div class="flex flex-col justify-center px-4 gap-4">
      <Articletest
      picture_src='/our-product/quick.png' 
      title="Quick and Easy Financing Access"
      paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>

      <Articletest
      picture_src='/our-product/integ.png' 
      title="Integration with Existing Systems"
      paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
      <Articletest
      picture_src='/our-product/overview.png' 
      title="Full Process and Actor Operations Overview"
      paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
      </div>
    </div>

    <article class="flex flex-col items-center gap-3 mt-12">
      <h3  class="font-semibold text-center text-3xl text-zinc-200 tracking-wide pb-8">ESG Performance Improvements</h3>
      <Esg/>
    </article>
  </section>
  <section class="flex flex-col py-16 px-2 min-h-screen gap-10 bg-blue-950/60">
    <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 font-bold tracking-wide text-center xl:text-[2.2rem]">For Large Enterprises</h2>
    <div class="flex flex-col justify-center gap-20 lg:flex-row items-center ">
      <img src="/our-product/city.svg" class="max-w-xl -hue-rotate-30"/>
      <div class="flex flex-col justify-center px-4 gap-4">
        <Articletest
        picture_src='/our-product/tradesphere.png' 
        title="Integration with Existing Systems"
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>

        <Articletest
          picture_src='/our-product/gear.png' 
          title="Advance Features"
          paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"/>
      </div>
    </div>

  </section>
  <section class=" flex flex-col py-16 px-2 min-h-screen gap-10 bg-blue-950/60">
    <h2 class="font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 text-center xl:text-[2.2rem]"> Trade Finance Providers</h2>
    <div class="flex flex-col justify-center gap-8 lg:gap-20 lg:flex-row-reverse items-center">
      <img src="/our-product/blockchain-finance.svg" class="max-w-xl"/>
      <div class="flex flex-col px-4 gap-4 justify-end">
          <Articletest
          picture_src='/our-product/block-finance.png' 
        title="Blockchain-based Financing Options "
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
          />
          <Articletest
          picture_src='/our-product/transp.png' 
        title="Transparency"
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
          />
          <Articletest
          picture_src='/our-product/risk.png' 
        title="Risk Management"
        paragr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit voluptatum quod iusto placeat eligendi expedita ullam, sapiente rem aliquid impedit quibusdam officiis accusamus dolorum alias mollitia aliquam doloremque a?"
          />
      </div>
      
    </div>
  </section>

</template>
<script setup>
import Articletest from '../components/Articletest.vue';
import Esg from '../components/Esg.vue';


</script>
<style scoped>
.expand-hover{
  transition: transform .5s ease;
}
.expand-hover:hover {
  transform: scale(1.1);
  cursor: pointer;
}
@keyframes appear{
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.blockani{
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

</style>